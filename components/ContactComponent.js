import React, { Component } from 'react'; 
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card title="Contact Information" wrapperStyle={{margin: 20 }} >        
                    <Text h4> 1 Nucamp Way </Text>
                    <Text h4> Seattle, WA 98001 </Text>
                    <Text h4> U.S.A. </Text>

                    <Text style={{marginBottom: 10}}/>
                    <Text h4> Phone: 1-206-555-1234 </Text>
                    <Text h4> Email: campsites@nucamp.co </Text>
                </Card> 
            </ScrollView>
        );
    }
}

export default Contact; 
