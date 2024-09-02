//swag

const { createApp } = Vue; 

createApp( 
    {
        data() {
            return {
                usersEmail: data,
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
                        console.log(joshua.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }
    }
).mount("#swag");















