import DatePicker from 'vue-datepicker/vue-datepicker-es6'

export default {
    data () {
        return {
            startTime: {
                time: ''
            },
            endtime: {
                time: ''
            },

            option: {
            type: 'day',
            week: 'Mo_Tu_We_Th_Fr_Sa_Su'.split('_'),
            month: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
            format: 'YYYY-MM-DD',
            placeholder: 'YYYY-MM-DD',
            inputStyle: {
                'display': 'inline-block',
                'padding': '6px',
                'line-height': '22px',
                'font-size': '16px',
                'border': '2px solid #fff',
                'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                'border-radius': '2px',
                'text-align': 'center',
                'max-width': '150px',
                'color': 'gray'
            },
            color: {
                header: '#ccc',
                headerText: '#f00'
            },
            buttons: {
                ok: 'Ok',
                cancel: 'Cancel'
            },
            overlayOpacity: 0.5, // 0.5 as default
            dismissible: true // as true as default
            },
            timeoption: {
                type: 'min',
                week: 'Mo_Tu_We_Th_Fr_Sa_Su'.split('_'),
                month: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                format: 'YYYY-MM-DD HH:mm'
            },
            multiOption: {
                type: 'multi-day',
                week: 'Mo_Tu_We_Th_Fr_Sa_Su'.split('_'),
                month: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
                format:"YYYY-MM-DD HH:mm"
            },
            limit: [
                {
                    type: 'weekday',
                    available: [1, 2, 3, 4, 5, 6, 7]
                },
                {
                    type: 'fromto',
                    from: '2017-01-01',
                    to: '2018-07-20'
                }
            ]
        }
    },

    mounted() {
    },

    components: {
        DatePicker
    }
}