//swag

const { createApp } = Vue; 

createApp( 
    {
        data() {
            return {
                usersEmail: data,
                si: false,
            }
        },
        methods: {
            //            retrieveDataButton() {
                //                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                //                    .then(function (response){
                    //                        const result = response.data;
                    //                        console.log(result);
                    //console.log(response);
                    //                        console.log(data);
                    //                    })
                //                    .catch(function (error) {
                    //                        console.error(error);
                    //                    });
                //            }
            retrieveDataButton() {
                axios
                    .get ("https:flynn.boolean.careers/exercises/api/random/mail")
                    .then((joshua) => {
                        const result = joshua.data;
                        console.log(result);
                        console.log(joshua);
                        console.log(joshua.data.response);

                        this.usersEmail.push({ email: joshua.data.response});

                        console.log(this.usersEmail);


                        if (this.usersEmail.length == 10) {
                            console.log('le email sono 10');
                            this.si = true;
                        }
                    })
                    .catch((errore) => {
                        console.error(errore);
                    });
            }
        }
    }
).mount("#swag");















