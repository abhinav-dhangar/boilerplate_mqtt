import mqtt from "mqtt/*";


const esp32SubHandler = (client: mqtt.MqttClient) => {
    const topic = "/nodejs/testing/esp32"
    client.subscribe([topic], (err) => {

        console.log('sub come to :' + topic);

        if (err) {
            console.log('there has some error');

        }
    })
}


export { esp32SubHandler }