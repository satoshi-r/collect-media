import iconMeduza from "@/assets/img/meduza.png";
import iconKommersant from "@/assets/img/kommersant.jpg";
import iconRt from "@/assets/img/rt.png";
import iconRbk from "@/assets/img/rbk.jpg";
import iconLenta from "@/assets/img/lenta.png";

export default {
    state: {
        sources: {
            meduza: {
                name: 'Meduza',
                icon: iconMeduza
            },
            kommersant: {
                name: 'Kommersant',
                icon: iconKommersant
            },
            rt: {
                name: 'RT',
                icon: iconRt
            },
            rbk: {
                name: 'RBK',
                icon: iconRbk
            },
            lenta: {
                name: 'Lenta',
                icon: iconLenta
            }
        }
    },

    getters: {
        allSources(state) {
            return state.sources;
        }
    }
}