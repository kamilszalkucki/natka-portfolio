<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark-custom">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link text-yellow-custom" aria-current="page" href="#">Home</a>
                        <a class="nav-link text-yellow-custom" href="#">Features</a>
                        <a class="nav-link text-yellow-custom" href="#">Pricing</a>
                        <a class="nav-link text-yellow-custom disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    components: {},
}
</script>