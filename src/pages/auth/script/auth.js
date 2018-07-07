import DatePicker from 'vue-datepicker/vue-datepicker-es6'

export default {
    data () {
        return {
            // for Vue 1.0
            starttime: '',
            endtime: '2016-01-19',
            testTime: '',
            multiTime: '',

            // for Vue 2.0
            startTime: {
                time: ''
            },
            endtime: {
                time: ''
            },

            option: {
            type: 'day',
            week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            format: 'YYYY-MM-DD',
            placeholder: 'when?',
            inputStyle: {
                'display': 'inline-block',
                'padding': '6px',
                'line-height': '22px',
                'font-size': '16px',
                'border': '2px solid #fff',
                'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                'border-radius': '2px',
                'color': '#5F5F5F'
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
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format: 'YYYY-MM-DD HH:mm'
            },
            multiOption: {
                type: 'multi-day',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format:"YYYY-MM-DD HH:mm"
            },
            limit: [
                {
                    type: 'weekday',
                    available: [1, 2, 3, 4, 5]
                },
                {
                    type: 'fromto',
                    from: '2017-01-01',
                    to: '2018-07-20'
                }
            ]
        }
    },
    components: {
        DatePicker
    }
}