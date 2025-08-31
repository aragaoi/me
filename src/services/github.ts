export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

export async function fetchGitHubRepos(
  username: string
): Promise<GitHubRepo[]> {
  try {
    // Fetch repositories from GitHub API
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Portfolio-App",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error("GitHub API rate limit exceeded. Please try again later.");
      } else if (response.status === 404) {
        throw new Error("GitHub user not found.");
      } else {
        throw new Error(`GitHub API error: ${response.status} - ${response.statusText}`);
      }
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and sort by stars/activity
    const filteredRepos = repos
      .filter((repo) => !repo.fork) // Only show original repositories
      .filter((repo) => repo.description) // Only show repos with descriptions
      .sort((a, b) => {
        // Sort by stars first, then by last updated
        if (a.stargazers_count !== b.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return (
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
      })
      .slice(0, 6); // Show top 6 repos

    return filteredRepos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    throw error; // Re-throw to let the component handle it
  }
}

export async function fetchRepoTopics(
  username: string,
  repoName: string
): Promise<string[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/topics`,
      {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
          "User-Agent": "Portfolio-App",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        console.warn("Rate limited when fetching topics, returning empty array");
        return [];
      }
      return [];
    }

    const data = await response.json();
    return data.names || [];
  } catch (error) {
    console.error("Error fetching repo topics:", error);
    return [];
  }
}
