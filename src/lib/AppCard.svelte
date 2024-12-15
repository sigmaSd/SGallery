<script>
    const { name = "", icon = "", link = "" } = $props();
</script>

<a href={link} class="app-card">
    <div class="icon">
        <img src={icon} alt={name} />
    </div>
    <div class="name">
        {name}
    </div>
</a>

<style>
    .app-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        text-decoration: none;
        color: inherit;
        border: 1px solid #ddd;
        border-radius: 8px;
        transition: all 0.2s;
    }

    .app-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .icon {
        width: 48px;
        height: 48px;
        margin-bottom: 0.5rem;
    }

    .icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .name {
        font-size: 0.9rem;
        text-align: center;
    }
</style>
