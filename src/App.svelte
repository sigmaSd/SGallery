<script>
    // Projects data
    const projects = [
        {
            name: "Album Camera",
            description:
                "A simple camera app that lets you instantly switch between different photo albums while taking pictures.",
            image: "https://raw.githubusercontent.com/sigmaSd/AlbumCam/refs/heads/master/assets/images/adaptive-icon.png",
            link: "https://github.com/sigmaSd/AlbumCam",
            download:
                "https://expo.dev/artifacts/eas/wvUftL2phVZkWJZUkbHvVJ.apk",
            tags: ["Mobile", "Camera"],
        },
        {
            name: "Stimulator",
            description: "Keep your computer awake",
            image: "https://raw.githubusercontent.com/sigmaSd/Stimulator/6878664af93f24c1d1178eeea4ff3627f4a03948/distro/io.github.sigmasd.stimulator.svg",
            link: "https://github.com/sigmaSd/Stimulator",
            download: "https://flathub.org/apps/io.github.sigmasd.stimulator",
            tags: ["Caffeine", "Utilities"],
        },
        {
            name: "Share",
            description: "Drop a file to share it",
            image: "https://raw.githubusercontent.com/sigmaSd/qr-share/15e1594b704c0277ac2322565f0c99ea76aa9088/distro/io.github.sigmasd.share.svg",
            link: "https://github.com/sigmaSd/qr-share",
            download: "https://flathub.org/apps/io.github.sigmasd.share",
            tags: ["Share", "Utilities"],
        },
    ];
</script>

<main>
    <h1>Projects</h1>

    <div class="gallery">
        {#each projects as project}
            <div class="card">
                <img src={project.image} alt={project.name} />
                <div class="content">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div class="tags">
                        {#each project.tags as tag}
                            <span class="tag">{tag}</span>
                        {/each}
                    </div>
                    <div class="buttons">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                        {#if project.download}
                            <a
                                href={project.download}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>

<style>
    :root {
        --primary-color: #4caf50;
        --secondary-color: #2196f3;
        --background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
    }

    main {
        max-width: 1400px;
        margin: 0 auto;
        padding: 1rem;
        background: var(--background);
    }

    h1 {
        text-align: center;
        color: #fff;
        margin-bottom: 1.5rem;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
    }

    .card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 1.2rem;
    }

    .card:hover {
        transform: translateY(-3px);
    }

    .card img {
        width: 100%;
        height: 200px;
        object-fit: contain;
    }

    .content {
        padding: 1.2rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    h2 {
        margin: 0 0 0.3rem 0;
        color: #333;
        font-size: 1.3rem;
        font-weight: 600;
    }

    p {
        margin: 0 0 0.5rem 0;
        color: #666;
        font-size: 0.9rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .tags {
        display: flex;
        gap: 0.3rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
    }

    .tag {
        background: #f0f0f0;
        padding: 0.2rem 0.4rem;
        border-radius: 12px;
        font-size: 0.7rem;
        color: #666;
    }

    .buttons {
        display: flex;
        gap: 0.5em;
        margin-top: auto;
    }

    .buttons a:first-child {
        display: inline-flex;
        align-items: center;
        background: var(--secondary-color);
        color: white;
        padding: 0.4rem 0.8rem;
        text-decoration: none;
        border-radius: 4px;
        font-size: 0.9rem;
        transition: background 0.2s ease-in-out;
    }

    .buttons a:last-child {
        display: inline-flex;
        align-items: center;
        background: var(--primary-color);
        color: white;
        padding: 0.4rem 0.8rem;
        text-decoration: none;
        border-radius: 4px;
        font-size: 0.9rem;
        transition: background 0.2s ease-in-out;
    }

    .buttons a:hover {
        filter: brightness(90%);
    }

    @media (max-width: 1200px) {
        .gallery {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 900px) {
        .gallery {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        .gallery {
            grid-template-columns: 1fr;
        }

        .card img {
            height: 120px;
        }

        .content {
            padding: 0.6rem;
        }
    }
</style>
