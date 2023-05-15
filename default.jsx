import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        home: 'block',
        resources: 'none',
        groups: 'none',
        profile: 'none',
        groupsList: [
            {
                listNumber: '6:00am',
                firstName: 'Amazon',
                RSVP: 'Bob',
            },
            {
                listNumber: '5:00pm',
                firstName: 'Yoga',
                RSVP: 'Chos',
            },
            {
                listNumber: '9:00am',
                firstName: 'Gym',
                RSVP: 'Robert',
            },
            {
                listNumber: '2:00pm',
                firstName: 'Walmart',
                RSVP: 'Clevland',
            },
            {
                listNumber: '4:00am',
                firstName: 'Religion',
                RSVP: 'Swanson',
            },
            {
                listNumber: '1:00pm',
                firstName: 'Moods',
                RSVP: 'Luis',
            },
            {
                listNumber: '10:00am',
                firstName: 'Gym',
                RSVP: 'Chris',
            },
            {
                listNumber: '4:00pm',
                firstName: 'Food',
                RSVP: 'Meg',
            },
        ],
        resourcesList: [
            {
                listNumber: '11:00am',
                firstName: 'Amazon AI',
                RSVP: 'Amazon',
                length: '60mins'
            },
            {
                listNumber: '12:00pm',
                firstName: 'Open AI',
                RSVP: 'Dr. Phillup',
                length: '60mins'
            },
            {
                listNumber: '5:00am',
                firstName: 'C++',
                RSVP: 'Rozema',
                length: '30mins'
            },
            {
                listNumber: '2:00pm',
                firstName: 'Quick Talk',
                RSVP: 'Dedert',
                length: '15mins'
            },
            {
                listNumber: '3:00am',
                firstName: 'Late Night Java',
                RSVP: 'Radrigez',
                length: '60mins'
            },
            {
                listNumber: '5:00pm',
                firstName: 'C#',
                RSVP: 'Chris',
                length: '30mins'
            },
            {
                listNumber: '1:00pm',
                firstName: 'Start with IntroConnect!',
                RSVP: 'Bob',
                length: '15mins'
            },
            {
                listNumber: '3:00pm',
                firstName: 'Yoga',
                RSVP: 'Chos',
                length: '60mins'
            },
        ],
    }

    handleHomePagePress = () => this.setState(state => ({
        home: 'block',
        resources: 'none',
        groups: 'none',
        profile: 'none',
    }));

    handleResourcesPagePress = () => this.setState(state => ({
        home: 'none',
        resources: 'block',
        groups: 'none',
        profile: 'none',
    }));

    handleGroupsPagePress = () => this.setState(state => ({
        home: 'none',
        resources: 'none',
        groups: 'block',
        profile: 'none',
    }));

    handleProfilePagePress = () => this.setState(state => ({
        home: 'none',
        resources: 'none',
        groups: 'none',
        profile: 'block',
    }));
  render() {
    return (
      <View style={styles.container}>
      <View style={{ display: this.state.home }}>
        <ImageBackground
          style={styles.backgroundImage}>
          <View style={styles.header}>
            <Image
              source={('https://codehs.com/uploads/0157001ecaf62382dad2adf735b2b421')}
              style={styles.logo2}
            />
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
              />
              <TouchableHighlight style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableHighlight>
            </View>
          </View>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.postContainer}>
              <View style={styles.postContent}>
                <Text style={styles.postTitle}>Hello World!</Text>
                <Text style={styles.postBody}>This is my first post on my new social media website!</Text>
                <Image
                  source={('https://codehs.com/uploads/73df6bf8d3c7715259847842b82fc64a')}
                  style={styles.postImage}
                />
                <View style={styles.postActions}>
                  <TouchableHighlight style={styles.postActionButton}>
                    <Text style={styles.postActionButtonText}>Like</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.postActionButton}>
                    <Text style={styles.postActionButtonText}>Comment</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.postActionButton}>
                    <Text style={styles.postActionButtonText}>Share</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={styles.postContainer}>
              <View style={styles.postContent}>
                <Text style={styles.postTitle}>My New Blog Post</Text>
                <Text style={styles.postBody}>Check out my latest blog post on my website!</Text>
                <Image
                  source={('https://codehs.com/uploads/7fb5584dc223bb6cad5ff7fcaa4e2000')}
                  style={styles.postImage}
                />
                <View style={styles.postActions}>
                  <TouchableHighlight style={styles.postActionButton}>
                    <Text style={styles.postActionButtonText}>Like</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.postActionButton}>
                    <Text style={styles.postActionButtonText}>Comment</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.postActionButton}>
                    <Text style={styles.postActionButtonText}>Share</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
        </View>
        
        <View style={{ display: this.state.resources }}>
        <ImageBackground
          style={styles.backgroundImage}>
          <View style={styles.header}>
            <Image
              source={('https://codehs.com/uploads/0157001ecaf62382dad2adf735b2b421')}
              style={styles.logo}
            />
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
              />
              <TouchableHighlight style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableHighlight>
            </View>
          </View>
          <ScrollView style={styles.scrollContainer}>
                {this.state.resourcesList.map((guest) => (
                    <TouchableOpacity
                        key={guest.id}
                        style={styles.touchableGuestListContainer}
                        onPress={() => {
                        // handle touch event
                        }}
                    >
                        <View style={styles.guestListContainer}>
                            <View style={styles.sideContainer}>
                                <Text style={styles.whiteText}>
                                    {guest.listNumber}
                                </Text>
                                <Text style={styles.whiteText}>
                                    {guest.length}
                                </Text>
                            </View>
                            <View style={styles.middleContainer}>
                                <Text style={styles.blueText}>
                                    {guest.lastName}
                                </Text>
                                <Text style={styles.blueText}>
                                    {guest.firstName}
                                </Text>
                            </View>
                            <View style={styles.sideContainer}>
                                <Text style={styles.whiteText}>
                                    {guest.RSVP}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
          </ScrollView>
         </ImageBackground>
        </View>
        
        <View style={{ display: this.state.groups }}>
        <ImageBackground
          style={styles.backgroundImage}>
          <View style={styles.header}>
            <Image
              source={('https://codehs.com/uploads/0157001ecaf62382dad2adf735b2b421')}
              style={styles.logo}
            />
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
              />
              <TouchableHighlight style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableHighlight>
            </View>
          </View>
          <ScrollView style={styles.scrollContainer}>
                {this.state.groupsList.map((guest) => (
                    <TouchableOpacity
                        key={guest.id}
                        style={styles.touchableGuestListContainer}
                        onPress={() => {
                        // handle touch event
                        }}
                    >
                        <View style={styles.guestListContainer}>
                            <View style={styles.sideContainer}>
                                <Text style={styles.whiteText}>
                                    {guest.listNumber}
                                </Text>
                                <Text style={styles.whiteText}>
                                    {guest.length}
                                </Text>
                            </View>
                            <View style={styles.middleContainer}>
                                <Text style={styles.blueText}>
                                    {guest.lastName}
                                </Text>
                                <Text style={styles.blueText}>
                                    {guest.firstName}
                                </Text>
                            </View>
                            <View style={styles.sideContainer}>
                                <Text style={styles.whiteText}>
                                    {guest.RSVP}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
          </ScrollView>
         </ImageBackground>
        </View>
        
        <View style={{ display: this.state.profile }}>
        <ImageBackground
          style={styles.backgroundImage}>
          <View style={styles.header}>
            <Image
              source={('https://codehs.com/uploads/0157001ecaf62382dad2adf735b2b421')}
              style={styles.logo}
            />
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
              />
              <TouchableHighlight style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableHighlight>
            </View>
          </View>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/656828625a55851fb042b4f841bad117' }}
                >
                </ImageBackground>
                        <Text style={styles.text2}>
                            Connor Schaffer
                        </Text>
                    <View style={styles.textContainer}>
                <View style={styles.postActions}>
                  <TouchableHighlight style={styles.postActionButton}>
                    <Text style={styles.postActionButtonText}>Privacy</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.postActionButton}>
                    <Text style={styles.postActionButtonText}>Edit</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.postActionButton}>
                    <Text style={styles.postActionButtonText}>Change</Text>
                  </TouchableHighlight>
                 </View>
                        <Text style={styles.text1}>
                            Bio:
                        </Text>
                        <Text style={styles.text1}>
                            Hobbies: Books
                        </Text>
                        <Text style={styles.text1}>
                            Favorite Food: Mac n cheese
                        </Text>
                        <Text style={styles.text1}>
                            Age: 21
                        </Text>
                        <Text style={styles.text1}>
                            Pronouns: He/Him
                        </Text>
                        
                    </View>
            </View>
          </ScrollView>
         </ImageBackground>
        </View>
        
        
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleHomePagePress}
                    >
                            <Text style={styles.navButtonText}>
                                Home
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleResourcesPagePress}
                    >
                            <Text style={styles.navButtonText}>
                                Resources
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleGroupsPagePress}
                    >
                            <Text style={styles.navButtonText}>
                                Groups
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleProfilePagePress}
                    >
                            <Text style={styles.navButtonText}>
                                Profile
                            </Text>
                    </TouchableHighlight>
                </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderColor: 'gray',
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 9,
  },
  logo2: {
    width: 50,
    height: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: deviceHeight / 20,
    marginLeft: 10,
  },
  searchInput: {
    color: 'black',
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 2,
    height: deviceHeight / 20,
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    height: deviceHeight / 20,
  },
  searchButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  scrollContainer: {
    width: '100%',
  },
  guestListContainer: {
    flexDirection: 'row',
    width: deviceWidth,
    height: deviceHeight / 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: 'white',
  },
  sideContainer: {
    width: deviceWidth / 4,
    height: deviceHeight / 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleContainer: {
    width: deviceWidth / 2,
    height: deviceHeight / 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  postContent: {
    flex: 1,
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postBody: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postActionButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
  },
  postActionButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  navbarContainer: {
    height: '2%',
    width: deviceWidth,
    backgroundColor: 'white',
    borderTopWidth: 5,
    borderColor: 'gray',
    flexDirection: 'row',
  },
  navButton: {
    height: deviceHeight / 16,
    width: deviceWidth / 4.35,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  navButtonText: {
    fontSize: deviceHeight / 40,
    textAlign: 'center',
    color: 'black',
  },
  text1: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 10,
  },
  text2: {
    fontSize: 25, 
    marginLeft:10,
  },
  background: {
    height: 175,
    width: 175,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginLeft:10,
  },
  paragraph: {
    width: '100%',
    marginLeft:10,
    height: '100%',
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Courier New',
  },
});