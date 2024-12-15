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
                "https://expo.dev/artifacts/eas/hMPqFj6CqQbYgMDguwwsgz.apk",
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
    main {
        max-width: 1400px;
        margin: 0 auto;
        padding: 1rem;
    }

    h1 {
        text-align: center;
        color: #333;
        margin-bottom: 1.5rem;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Fixed 4 columns */
        gap: 1rem;
    }

    .card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
    }

    .card:hover {
        transform: translateY(-3px);
    }

    .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .content {
        padding: 0.8rem;
    }

    h2 {
        margin: 0 0 0.3rem 0;
        color: #333;
        font-size: 1.1rem;
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

    a {
        display: inline-flex;
        align-items: center;
        background: #4caf50;
        color: white;
        padding: 0.4rem 0.8rem;
        text-decoration: none;
        border-radius: 4px;
        font-size: 0.9rem;
        transition: background 0.2s ease-in-out;
    }

    a:hover {
        background: #45a049;
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
    .buttons {
        display: flex;
        gap: 0.1em;
    }
</style>
