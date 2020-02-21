export default {
    methods:{
        getDate(){
            let date = new Date();
            let montch = date.getMonth() + 1
            let year = date.getFullYear()
            let day = date.getDate()
            if(montch.toString().length == 1)
                montch = "0" + montch
            if(day.toString().length == 1)
                day = "0" + day+1
            return year+"-"+montch+"-"+day
        }
    }
}