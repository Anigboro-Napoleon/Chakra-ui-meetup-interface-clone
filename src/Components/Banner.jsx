import { Box, Image, Button, Container, Heading, Grid, Badge, FormControl, Input, Link, Divider } from '@chakra-ui/react'
import brandLogo from '../Assets/brand-logo.svg'
import illustration from '../Assets/illustration.svg'
import imageOne from '../Assets/image-one.jpg'
import imageTwo from '../Assets/image-two.jpg'
import imageThree from '../Assets/image-three.jpg'
import rightArrow from '../Assets/arrow-right.svg'
import mapMarker from '../Assets/map-marker.svg'
import startGroup from '../Assets/start-group.svg'
import joinGroup from '../Assets/joinagroup.svg'
import findEvent from '../Assets/ticket.svg'
import upcomingOne from '../Assets/upcomming-one.png'
import webDevelopment from '../Assets/web development.jpg'
import smiling from '../Assets/smile.jpg'
import freedom from '../Assets/freedom.jpg'
import video from '../Assets/video.svg'
import groupOne from '../Assets/group1.jpg'
import groupTwo from '../Assets/group2.jpg'
import groupThree from '../Assets/group3.jpg'
import screenIos from '../Assets/ScreenIos.webp'
import screenAndroid from '../Assets/ScreenAndroid.webp'
import meetupLogo from '../Assets/meetup.png'
import appStore from '../Assets/app-store.svg'
import googlePlay from '../Assets/google-play.svg'
import blogOne from '../Assets/blog1.webp'
import blogTwo from '../Assets/blog2.webp'
import blogThree from '../Assets/blog3.webp'
import facebook from '../Assets/facebook-f.svg'
import twitter from '../Assets/twitter.svg'
import youtube from '../Assets/youtube.svg'
import instagram from '../Assets/instagram.svg'

function Banner() {
  return <div>
    <header>
      <Box 
        d="flex"
        alignItems="center"
        justifyContent="space-between" 
        ml={6} 
        mr={6} 
        >
        <Box>
          <Image boxSize="90px" src={brandLogo} alt="brand" />
        </Box>
        <Box>
          <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
            Log In
          </Button>
          <Button colorScheme="gray.600" fontSize="sm" variant="link">
            Sign Up
          </Button>
        </Box>
      </Box>
    </header>

    {/* main punchline */}
    <Box>
      <Container maxW="1200px">
        <Box 
          d="flex" 
          alignItems="center" 
          py="20" 
          flexDirection={{
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            base: "column"
          }}          
        >
          <Box mr="6" flexBasis="50%">
            <Heading as="h1" fontSize={{sm: "1.5rem", md: "2rem", lg: "3rem", xl: "3rem", base: "1.5rem"}}>
              <Box ml="2" fontWeight="black">
                Celebrating 20 years of real connection on Meetup
              </Box>
            </Heading>
            <Box ml="2" mt="6" fontWeight="normal">
              Whatever you’re looking to do this year, Meetup can help. For 20 years, people have turned to Meetup to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.
            </Box>
          </Box>
          <Box w="100%" flexBasis="50%">
            <Image w="100%" src={illustration} alt="illustration"/>
          </Box>
        </Box>
      </Container>
    </Box>

    {/* three boxes */}
    <Container maxW="1100px" mt="10" mb="10">
      <Grid 
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          base: "repeat(1, 1fr)"
        }}  
        gap="10"
      >
        <Box>
          <Image w="100%" borderRadius="lg" src={imageOne} alt="image one" />
          <Button colorScheme="teal" variant="link" mt="5">
            Meet new people
            <Image w="40px" src={rightArrow} alt="right arrow" />
          </Button>
        </Box>
        <Box>
          <Image w="100%" borderRadius="lg" src={imageTwo} alt="image two" />
          <Button colorScheme="teal" variant="link" mt="5">
            Explore new places
            <Image w="40px" src={rightArrow} alt="right arrow" />
          </Button>
        </Box>
        <Box>
          <Image w="100%" borderRadius="lg" src={imageThree} alt="image three" />
          <Button colorScheme="teal" variant="link" mt="5">
            Meet new people
            <Image w="40px" src={rightArrow} alt="right arrow" />
          </Button>
        </Box>
      </Grid>
    </Container>

    {/* pills */}
    <Container maxW="1100px">
      <Box flexDirection="row" display="flex" flexWrap="wrap" justifyContent={{sm: "null", md: "null", lg: "space-between", xl: "space-between", base: "null"}}>
        <Badge borderRadius="24px" px="4" py="2" mr={{sm: "1", md: "1", lg:  "4", xl: "4", base: "1"}} mb="4" textTransform="normal" color="#ffffff" bg="teal">
          Boost your career
        </Badge>
        <Badge borderRadius="24px" px="4" py="2" mr={{sm: "1", md: "1", lg:  "4", xl: "4", base: "1"}} mb="4" textTransform="normal" color="#ffffff" bg="teal">
          Find your zen
        </Badge>
        <Badge borderRadius="24px" px="4" py="2" mr={{sm: "1", md: "1", lg:  "4", xl: "4", base: "1"}} mb="4" textTransform="normal" color="#ffffff" bg="teal">
          Get moving
        </Badge>
        <Badge borderRadius="24px" px="4" py="2" mr={{sm: "1", md: "1", lg:  "4", xl: "4", base: "1"}} mb="4" textTransform="normal" color="#ffffff" bg="teal">
          Share language + culture
        </Badge>
        <Badge borderRadius="24px" px="4" py="2" mr={{sm: "1", md: "1", lg:  "4", xl: "4", base: "1"}} mb="4" textTransform="normal" color="#ffffff" bg="teal">
          Read with friends
        </Badge>
        <Badge borderRadius="24px" px="4" py="2" mr={{sm: "1", md: "1", lg:  "4", xl: "4", base: "1"}} mb="4" textTransform="normal" color="#ffffff" bg="teal">
          Write together
        </Badge>
        <Badge borderRadius="24px" px="4" py="2" mr={{sm: "1", md: "1", lg:  "4", xl: "4", base: "1"}} mb="4" textTransform="normal" color="#ffffff" bg="teal">
          Hone your craft
        </Badge>
      </Box>
    </Container>

    {/* last header section */}
    <Container maxW="1200px" mt="20" mb="20">
      <Grid templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(2, 1fr)",   base: "repeat(1, 1fr)"}} gap="10">
        <Box>
          <Heading as="h3" fontSize="1.875rem" mb="7" fontWeight="700" textAlign={{sm: "center", md: "center", lg: "null", xl: "null", base: "center"}}>What do you want to do?</Heading>
          <Box display="flex" alignItems="center" flexDirection="row" w="100%">
            <Box flexBasis="50%" w="100%" mr="2">
              <FormControl>
                <Box pos="relative">
                  <Input pl="8" placeholder="Search for 'tennis'" type="text" w="100%" />
                  <Box pos="absolute" top="3" left="2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="#c0c0c0"
                      >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Box>
                </Box>
              </FormControl>
            </Box>
            <Box flexBasis="50%" w="100%" mr="2">
              <FormControl>
                <Box pos="relative">
                  <Input pl="8" placeholder="City or zip code" type="text" w="100%" />
                  <Box pos="absolute" top="3" left="2">
                    <Image w="18px" h="18px" src={mapMarker} alt="location tag" />
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Button _hover={{ opacity: "0.8", bg: "teal" }} mt="5" pt="6" pb="6" w="100%" color="#ffffff" bg="red.500" fontSize="lg" transition="1s">
            <Box fontWeight="normal">Search</Box>
          </Button>
        </Box>
        <Box>
          <Heading as="h3" fontSize="1.875rem" mb="7" fontWeight="700" textAlign={{sm: "center", md: "center", lg: "null", xl: "null", base: "center"}}>See what's happening</Heading>
          <Box display="flex" flexDirection="row" justifyContent={{sm: "center", md: "center", lg: null, xl: null, base: "center"}}>
            <Badge borderRadius="24px" fontSize="1rem" fontWeight="normal" px="4" py="2" mr="2" mb="4" textTransform="normal" color="#ffffff" bg="teal">
              Starting soon
            </Badge>
            <Badge borderRadius="24px" fontSize="1rem" fontWeight="normal" px="4" py="2" mr="2" mb="4" textTransform="normal" color="#ffffff" bg="teal">
              Today
            </Badge>
            <Badge borderRadius="24px" fontSize="1rem" fontWeight="normal" px="4" py="2" mr="2" mb="4" textTransform="normal" color="#ffffff" bg="teal">
              Tomorrow
            </Badge>
            <Badge borderRadius="24px" fontSize="1rem" fontWeight="normal" px="4" py="2" mr="2" mb="4" textTransform="normal" color="#ffffff" bg="teal">
              This week
            </Badge>
          </Box>
          <Box display="flex" flexDirection="row"justifyContent={{sm: "center", md: "center", lg: "null", xl: "null", base: "center"}}>
            <Badge borderRadius="24px" fontSize="1rem" fontWeight="normal" px="4" py="2" mr="2" mb="4" textTransform="normal" color="#ffffff" bg="teal">
              Online
            </Badge>
            <Badge borderRadius="24px" fontSize="1rem" fontWeight="normal" px="4" py="2" mr="2" mb="4" textTransform="normal" color="#ffffff" bg="teal">
              In person
            </Badge>
            <Badge borderRadius="24px" fontSize="1rem" fontWeight="normal" px="4" py="2" mr="2" mb="4" textTransform="normal" color="#ffffff" bg="teal">
              Trending near you
            </Badge>
          </Box>
        </Box>
      </Grid>
    </Container>

    <Container maxW="1000px">
      <Box>
        <Heading as="h1" textAlign="center" fontSize="1.875rem" mb="15px">
          How Meetup works
        </Heading>
        <Box fontSize="1rem" textAlign="center" mb="40px">
          Meet new people who share your interests through online and in-person <br/> events. It’s free to create an account.
        </Box>
      </Box>

      <Grid templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(3, 1fr)", base: "repeat(1, 1fr)"}} gap="20" mb="40px">
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Image w="60%" src={startGroup} alt="Start a group" />
          <Box>
            <Button as="h5" color="teal" fontSize="1.25rem" variant="link">
              Start a group
            </Button>
          </Box>
          <Box fontSize=".875rem" textAlign="center" mb="20px">
          You don’t have to be an expert to gather people together and explore shared interests.
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Image w="60%" src={joinGroup} alt="Join a group" />
          <Box>
            <Button as="h5" color="teal" fontSize="1.25rem" variant="link">
              Join a group
            </Button>
          </Box>
          <Box fontSize=".875rem" textAlign="center" mb="20px">
          Do what you love, meet others who love it, find your community. The rest is history!
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Image w="60%" src={findEvent} alt="Find an event" />
          <Box>
            <Button as="h5" color="teal" fontSize="1.25rem" variant="link">
              Find an event
            </Button>
          </Box>
          <Box fontSize=".875rem" textAlign="center" mb="20px">
          Events are happening on just about any topic you can think of, from online gaming and photography to yoga and hiking.
          </Box>
        </Box>
      </Grid>

      <Box display="flex" alignItems="center" justifyContent="center" mb="30px">
        <Button bg="teal" color="#ffffff" fontSize="1rem" _hover={{ opacity: 0.8 }}>Join Meetup</Button>
      </Box>
    </Container>

    {/* Upcoming online event */}
    <Container maxW="1200" mt="80px" mb="30px">
      <Box display="flex" alignItems="center" justifyContent="space-between" mb="30px">
        <Heading as="h3" alignItems="center" fontSize="1.875rem">
          Upcoming Online Events
        </Heading>
        <Box>
          <Link color="teal" fontSize="1rem">
            Explore more events
          </Link>
        </Box>        
      </Box>

      <Grid templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(4, 1fr)", base: "repeat(1, 1fr)"}} gap="6">
        <Box pos="relative">
          <Image borderRadius="10px" w="100%" src={upcomingOne} alt="Upcoming One" />
          <Box pos="absolute" fontSize=".75rem" color="#757575" bg="white" top="3" left="2" fontWeight="600" px="2" borderRadius="3" display="flex">
            <Box mr="4px">
              <Image w="18px" src={video} alt="Video" />
            </Box>
            <Box>
              Online Event
            </Box>            
          </Box>
          <Box color="#A28357" fontWeight="600" fontSize=".9rem" cursor="pointer" mt="15px" ml="15px">
            SUN, MAY 15 - 3:00PM WAST
          </Box>
          <Box color="#000" fontWeight="600" fontSize="1rem" cursor="pointer" mt="10px" ml="15px">
            Befriend Your Anxiety
          </Box>
        </Box>
        <Box pos="relative">
          <Image borderRadius="10px" w="100%" src={webDevelopment} alt="Introduction to web development" />
          <Box pos="absolute" fontSize=".75rem" color="#757575" bg="white" top="3" left="2" fontWeight="600" px="2" borderRadius="3" display="flex">
            <Box mr="4px">
              <Image w="18px" src={video} alt="Video" />
            </Box>
            <Box>
              Online Event
            </Box>            
          </Box>
          <Box color="#A28357" fontWeight="600" fontSize=".9rem" cursor="pointer" mt="15px" ml="15px">
            FRI, MAY 20 - 12:00AM WAST
          </Box>
          <Box color="#000" fontWeight="600" fontSize="1rem" cursor="pointer" mt="10px" ml="15px">
            Intro to Web deverlopment: Perl
          </Box>
        </Box>
        <Box pos="relative">
          <Image borderRadius="10px" w="100%" h={{sm: "500px", md : "500px", lg: "160px", xl: "160px", base: "500px"}} src={smiling} alt="Smiling face" />
          <Box pos="absolute" fontSize=".75rem" color="#757575" bg="white" top="3" left="2" fontWeight="600" px="2" borderRadius="3" display="flex">
            <Box mr="4px">
              <Image w="18px" src={video} alt="Video" />
            </Box>
            <Box>
              Online Event
            </Box>            
          </Box>
          <Box color="#A28357" fontWeight="600" fontSize=".9rem" cursor="pointer" mt="15px" ml="15px">
            WED, MAY 25 - 11:00PM WAST
          </Box>
          <Box color="#000" fontWeight="600" fontSize="1rem" cursor="pointer" mt="10px" ml="15px">
            Want to be happier and more confident?
          </Box>
        </Box>
        <Box pos="relative">
          <Image borderRadius="10px" w="100%" src={freedom} alt="Freedom" />
          <Box pos="absolute" fontSize=".75rem" color="#757575" bg="white" top="3" left="2" fontWeight="600" px="2"     borderRadius="3" display="flex">
            <Box mr="4px">
              <Image w="18px" src={video} alt="Video" />
            </Box>
            <Box>
              Online Event
            </Box>            
          </Box>
          <Box color="#A28357" fontWeight="600" fontSize=".9rem" cursor="pointer" mt="15px" ml="15px">
            THU, MAY 26 - 12:00AM WAST
          </Box>
          <Box color="#000" fontWeight="600" fontSize="1rem" cursor="pointer" mt="10px" ml="15px">
            Learn how to stop inadvertently amplifying your painful emotions and...
          </Box>
        </Box>        
      </Grid>
    </Container>

    <Container maxW="1200px" mt="50px" mb="40px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h1" fontSize="1.875rem" fontWeight="700">
          Popular groups
        </Heading>
        <Box color="teal" fontSize="1rem">
          <Link>
            Explore more groups
          </Link>          
        </Box>
      </Box>

      <Grid templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(3, 1fr)", base: "repeat(1, 1fr)"}} gap="6">
        <Box w="100%" border="solid" borderWidth=".5px" borderColor="#757575" borderRadius="5px" mt="30px" pl="20px" pt="20px" pb="25px" pr="20px">
          <Box display="flex" mb="5px">
            <Image w="60px" h="55px" borderRadius="5px" src={groupOne} alt="First group" />
            <Box ml="20px">
              <Box color="teal">New Group</Box>
              <Heading as="h1" fontSize="1.25rem" fontWeight="700">
                New York/New Jersey Nigerian women's meetu...
              </Heading>
            </Box>
          </Box>
          <Box>
            <Divider orientation='horizontal' pb="5px" />
            <Box color="#A28357" fontWeight="600" fontSize=".9rem" cursor="pointer" mt="10px">
              SAT, JULY 26 - 6:00PM WAST
            </Box>
            <Heading as="h3" fontWeight="500" fontSize="1rem" pt="5px">
              Welcome Brunch
            </Heading>
          </Box>
        </Box>       
        <Box w="100%" border="solid" borderWidth=".5px" borderColor="#757575" borderRadius="5px" mt="30px" pl="20px" pt="20px" pb="25px" pr="20px">
          <Box display="flex" mb="5px">
            <Image w="60px" h="55px" borderRadius="5px" src={groupTwo} alt="Second group" />
            <Box ml="20px">            
              <Heading as="h1" fontSize="1.25rem" fontWeight="700">
                Dashing Whippets Running Team
              </Heading>
            </Box>
          </Box>
          <Box>
            <Divider orientation='horizontal' pb="5px" />
            <Box color="#A28357" fontWeight="600" fontSize=".9rem" cursor="pointer" mt="10px">
              THU, MAY 12 - 11:30PM WAST
            </Box>
            <Heading as="h3" fontWeight="500" fontSize="1rem" pt="5px">
              Brooklyn "Track" Workout
            </Heading>
          </Box>
        </Box>       
        <Box w="100%" border="solid" borderWidth=".5px" borderColor="#757575" borderRadius="5px" mt="30px" pl="20px" pt="20px" pb="25px" pr="20px">
          <Box display="flex" mb="5px">
            <Image w="60px" h="55px" borderRadius="5px" src={groupThree} alt="Third group" />
            <Box ml="20px">
              <Box color="teal">New Group</Box>
              <Heading as="h1" fontSize="1.25rem" fontWeight="700">
                Code Labs Academy NYC - Coding Bootcamp
              </Heading>
            </Box>
          </Box>
          <Box>
            <Divider orientation='horizontal' pb="5px" />
            <Box color="#A28357" fontWeight="600" fontSize=".9rem" cursor="pointer" mt="10px">
              FRI, MAY 13 - 5:00PM WAST
            </Box>
            <Heading as="h3" fontWeight="500" fontSize="1rem" pt="5px">
              Pitch Talk Series - Discover Krello
            </Heading>
          </Box>
        </Box>       
      </Grid>
    </Container>

    <Container maxW="1200px" mt="220px" mb="150px">
      <Grid templateColumns="repeat(3, 1fr)" gap="10">
        <Box>
          <Image w="70%" src={screenIos} alt="Apple phone" />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image w="20%" src={meetupLogo} alt="Meetup logo" mb="5px" />
          <Heading as="h3" fontWeight="700" fontSize="1.25rem" mt="50px">Stay connected.</Heading>
          <Heading as="h3" fontWeight="700" fontSize="1.25rem" mb="50px">Download the app</Heading>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Image w="100%" src={appStore} alt="App store" mr="15px" />
            <Image w="100%" src={googlePlay} alt="Google playstore" ml="15px" />
          </Box>
        </Box>
        <Box ml="80px">
          <Image w="90%" src={screenAndroid} alt="Android phone" />
        </Box>
      </Grid>
    </Container>

    <Container maxW="1200px" mt="100px" mb="100px">
      <Heading textAlign="center" as="h1" fontWeight="700" fontSize="1.875rem" pb="15px">Stories from Meetup</Heading>
      <Box textAlign="center" fontSize="1.1rem">
        People on Meetup have fostered community, learned new skills, started businesses, and made life-long <br/> friends. Learn how.
      </Box>
      <Grid templateColumns={{sm: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(3, 1fr)", base: "repeat(1, 1fr)"}} gap="10" mt="25px">
        <Box>
          <Image w="100%" src={blogOne} alt="First blog" mb="10px" _hover={{ opacity: 0.8 }} />
          <Link fontWeight="700" fontSize="1.25rem">
            Three Ways To Make Coworker Friendships While Working From Home
          </Link>
          <Box color="#757575" fontSize="1rem" mt="15px">
            Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues.
          </Box>
        </Box>
        <Box>
          <Image w="100%" src={blogTwo} alt="Second blog" mb="10px" _hover={{ opacity: 0.8 }} />
          <Link fontWeight="700" fontSize="1.25rem">
            Five Ways To Feel More Connected
          </Link>
          <Box color="#757575" fontSize="1rem" mt="15px">
            Since Meetup began nearly 20 years ago, we’ve fostered connections between more than 50 million people in 190 countries worldwide. Here are five simple strategies to help you feel more connected and improve your wellbeing.
          </Box>
        </Box>
        <Box>
          <Image w="100%" src={blogThree} alt="Third blog" mb="10px" _hover={{ opacity: 0.8 }} />
          <Link fontWeight="700" fontSize="1.25rem">
            How To Live Your Best Social Life
          </Link>
          <Box color="#757575" fontSize="1rem" mt="15px">
            Social interaction is a key part of any healthy lifestyle. Discover all different kinds of events that’ll help you maintain a fun and fulfilling social life.
          </Box>
        </Box>        
      </Grid>
    </Container>

    <Container maxW="12000px" bg="#212121" mt="40px" pt="60px" pb="30px" pl="40px" pr="40px">
      <Box display="flex" alignItems="center" mb="25px">
        <Heading mr="10px" color="#fff" fontSize="1rem" fontWeight="700">
          Create your own Meetup group.
        </Heading>
        <Button border="solid" borderWidth="2px" borderColor="#fff" bg="#212121" color="#fff" borderRadius="4px" cursor="pointer" _hover={{opacity: 1}} ml="10px" fontWeight="700" fontSize="1.1rem">
          Get Started
        </Button>
      </Box>
      <Divider orientation='horizontal' mb="10px" />
      <Grid templateColumns="repeat(3, 1fr)" gap="20">
        <Box display="flex" flexDirection="column" textAlign="left" justifyContent="left" py="15px">
          <Heading color="#F6F7F8" fontWeight="400" py="6px" fontSize="1rem">
            Your Account
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Sign Up
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Log In
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Help
          </Heading>
        </Box>
        <Box display="flex" flexDirection="column" textAlign="left" justifyContent="left" py="15px">
          <Heading color="#F6F7F8" fontWeight="400" py="6px" fontSize="1rem">
            Discover
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Groups
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Calendar
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Topics
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Cities
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Online Events
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Local Guides
          </Heading>
        </Box>
        <Box display="flex" flexDirection="column" textAlign="left" justifyContent="left" py="15px">
          <Heading color="#F6F7F8" fontWeight="400" py="6px" fontSize="1rem">
            Meetup
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            About
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Blog
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Meetup Pro
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Careers
          </Heading>
          <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize=".875rem" cursor="pointer" _hover={{opacity: 0.7}}>
            Apps
          </Heading>
        </Box>
      </Grid>
      <Box display="flex" alignItems="center" justifyContent="space-between" mt="50px">
        <Box display="flex" flexDirection="column" justifyContent="left" textAlign="left" alignSelf="left">
          <Heading color="#f6f7f8" fontSize=".875rem">Follow Us</Heading>
          <Box display="flex" alignItems="center">
            <Link mr="25px" mt="15px">
              <Image w="30px" src={facebook} alt="Facebook" />
            </Link>
            <Link mr="25px" ml="10px" mt="15px">
              <Image w="30px" src={twitter} alt="Twitter" />
            </Link>
            <Link mr="25px" ml="10px" mt="15px">
              <Image w="30px" src={youtube} alt="Youtube" />
            </Link>
            <Link mr="25px" ml="10px" mt="15px">
              <Image w="30px" src={instagram} alt="Instagram" />
            </Link>
          </Box>
        </Box>
        <Box display="flex">
          <Image w="50%" src={appStore} mr="15px" cursor="pointer" />
          <Image w="50%" src={googlePlay} ml="15px" cursor="pointer" />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" mt="50px">
        <Heading color="#F6F7F8" fontWeight="400" py="6px" fontSize="1rem" mr="15px">2022 Meetup</Heading>
        <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize="1rem" cursor="pointer" _hover={{opacity: 0.7}} ml="15px" mr="15px">
          Terms of service
        </Heading>
        <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize="1rem" cursor="pointer" _hover={{opacity: 0.7}} ml="15px" mr="15px">
          Privacy policy
        </Heading>
        <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize="1rem" cursor="pointer" _hover={{opacity: 0.7}} ml="15px" mr="15px">
          Cookie policy
        </Heading>
        <Heading color="#96A2A2" fontWeight="400" py="6px" fontSize="1rem" cursor="pointer" _hover={{opacity: 0.7}} ml="15px" mr="15px">
          Help
        </Heading>
      </Box>
    </Container>

  </div>
}

export default Banner;