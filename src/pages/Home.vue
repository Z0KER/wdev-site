<template>
    <main>
        <section>
            <div class="text-top">Videos novos toda <b>quinta</b> às <b>20h</b></div>
            <a href="https://youtube.com/wdevoficial" target="_blank">
                <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" id="subscribe" alt="Increva-se">
            </a>
            <div class="text-bottom">youtube.com/wdevoficial</div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    main {
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    section {
        text-align: center;
    }

    .text-top {
        color: var(--color-text-light);
        font-size: 22px;
        margin-bottom: 20px;
    }

    #subscribe {
        width: 280px;
    }

    .text-bottom {
        color: var(--color-text-light);
        font-size: 18px;
        margin-top: 20px;
    }

    @media (min-width: 700px) {
        #subscribe {
            width: 370px;
        }
    }
</style>