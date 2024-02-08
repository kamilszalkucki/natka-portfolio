<template>
    <div class="offer-info-section" id="offer-info">
        <div class="row w-100">
            <div class="col-12">
                <InfoButton :btnStyle="btnStyles" class="mt-5 mb-5">
                    OFERTA
                </InfoButton>
            </div>
        </div>

        <div class="row w-100 d-flex justify-content-center">
            <div class="col-6 col-offset-6 d-flex flex-column align-items-center justify-content-center offer">
                <p>Jesteś we właściwym miejscu, jeśli potrzebujesz projektu graficznego dopasowanego do Twoich
                    potrzeb.</p>
                <p class="mb-0">Moja oferta obejmuje szeroki zakres projektów graficznych, w tym:</p>

                <div class="row">
                    <div class="col-12 list mt-5 mb-5">
                        <ul class="p-0 m-0">
                            <li>Identyfikacja wizualna marki(strategia warianty logo, paleta kolorow, typografia, pattern dodatkowe elementy marki wedlug Twoich potrzeb)</li>
                            <li>logo</li>
                            <li>wizytowki</li>
                            <li>broszury</li>
                            <li>cenniki</li>
                            <li>karty lojalnosciowe</li>
                            <li>vouchery</li>
                            <li>projekty opakowan</li>
                            <li>posty na media spolecznosciowe</li>
                            <li>naklejki</li>
                            <li>miniaturki</li>
                            <li>projekt menu</li>
                        </ul>
                    </div>
                </div>

                <p>Zaczynam każdy projekt od przesłania Ci briefu - zestawu pytań, które pomogą mi zrozumieć Twój biznes oraz Twoje indywidualne założenia. To pozwoli nam ustalić spersonalizowaną strategię działania, dopasowaną do Twoich celów i oczekiwań.</p>
                <p>Cena oraz czas realizacji jest indywidualny dla każdego projektu, lecz poinformuję Cię o nich po poznaniu Twoich wymagań i ustaleniu strategii.</p>
                <p style="margin-bottom: 100px;">Odezwij się a odpowiem na każde Twoje dodatkowe pytanie!</p>
            </div>
        </div>
    </div>
</template>
<script>
import InfoButton from '../InfoButton.vue';

export default {
    name: "OfferInfo",
    components: {
        InfoButton,
    },
    setup() {
        const btnStyles = {
            backgroundColor: '#A5927C',
            color: '#EEE5D3',
            cursor: 'default',
            height: '88px',
            width: '274px',
            borderRadius: '50px',
            textAlign: 'center',
            font: 'normal normal 600 25px/38px Poppins',
            letterSpacing: '0px',
            border: 'none',
            transition: '.3s'
        };

        return {
            btnStyles,
        }
    }
}
</script>
<style scoped>
.offer-info-section {
    background-color: #EEE5D3;
}

.offer {
    max-width: 590px;
}

p {
    text-align: center;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #A5927C;
}

ul {
    list-style-position: inside;
}

ul li::marker {
    margin: 0;
    padding: 0;
    list-style-position: inside;
}




ul>li {
    text-align: center;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #EEE5D3;
}

.list {
    background-color: #A5927C;
    border-radius: 50px;
    padding: 15px;
}
</style>