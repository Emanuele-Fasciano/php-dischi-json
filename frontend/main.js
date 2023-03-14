const { createApp } = Vue;

createApp({
    data(){
        return{
        diskList : [],

        activeDisk : null
    }
},

created(){
    axios.get("http://localhost/boolean%20back-end/php-dischi-json/api/get-list.php")
    .then((response) => {
        this.diskList = response.data
        });
    },

methods: {
selectDisk(index){
    this.activeDisk = index
},

exit(){
    this.activeDisk = null
}
}
}).mount("#app");