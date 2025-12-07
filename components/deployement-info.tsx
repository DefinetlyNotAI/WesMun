export default function DeploymentInfo() {
    const hash = process.env.GIT_COMMIT_HASH
    const branch = process.env.GIT_BRANCH
    const local = hash === "local"

    if (local) {
        return (
            <div style={{marginTop: "1rem", fontSize: "0.75rem", color: "#aaa"}}>
                Running Local Build/Deployment
            </div>
        )
    }

    const repoUrl = "https://github.com/DefinetlyNotAI/WesMun"

    return (
        <div style={{marginTop: "1rem", fontSize: "0.75rem", color: "#aaa"}}>
            Release:{" "}
            <a
                href={`${repoUrl}/commit/${hash}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: "underline", color: "#aaa"}}
            >
                {hash?.slice(0, 6)}
            </a>{" "}
            on '{branch}' branch.
        </div>
    )
}
