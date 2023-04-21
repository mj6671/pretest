
<script>

import iso9001 from '../components/iso9001.vue';
import iso14001 from '../components/iso14001.vue';
import Iso22000 from '../components/iso22000.vue';
import Iso27001 from '../components/iso27001.vue';
import Iso45001 from '../components/iso45001.vue';

export default {
    data() {
        return {

        }
    },

    components: {
        iso9001,
        iso14001,
        Iso22000,
        Iso27001,
        Iso45001
    },

    methods: {

    }
}
</script>

<template>
<iso9001/>
<iso14001/>
<Iso22000/>
<Iso27001/>
<Iso45001/>
</template>


<style scoped></style>