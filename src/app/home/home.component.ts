import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { StationService } from '../Services/station.service';
import { HomeService } from '../Services/home.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { getDistanceFromLatLonInKm } from '../utility/location-utils';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public stationService: StationService,
    public homeService: HomeService,
    private router: Router,
    private toster: ToastrService
    , private profileService: ProfileService) {

  }
  stationName: FormControl = new FormControl('');

  ngOnInit(): void {
    this.homeService.GetAllHomePages();
    this.stationService.getAllStation();
    this.getUserLocation();
  }
  searchStation() {
    this.stationService.searchStations(this.stationName.value);

  }

  activeTab: string = 'All Stations';
  filterStation: any = null;
  setActiveTab(tabName: string) {
    this.activeTab = tabName;
    if (tabName == "All Stations")
      this.filterStation = null;
    if (tabName == "Nearest Station") {
      this.findNearestStation();
    }

  }



  findNearestStation(): any {
    let nearestStation: any = {};
    let minDistance = Infinity;


    this.stationService.stations.forEach((station: any) => {

      const distance = getDistanceFromLatLonInKm(this.userLocation!.lat, this.userLocation!.lng, station.latitude, station.longitude);
      if (distance < minDistance) {
        minDistance = distance;
        nearestStation = station;
      }
    });

    this.filterStation = nearestStation;
  }


  center: google.maps.LatLngLiteral = { lat: 32.556212, lng: 35.847239 };
  zoom = 12; // مستوى التكبير

  onMarkerClick(station: any) {

    this.router.navigate(['/station', station.stationid]);
  }
  userLocation: google.maps.LatLngLiteral | null = null; // The user's current location

  getUserLocation() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.center = this.userLocation; // Update the map center to the user's location
          console.log('User Location:', this.userLocation);
          this.profileService.setUserLocation(this.userLocation);
        },
        (error) => {
          console.error('Error getting location', error);
          this.toster.warning('Unable to retrieve your location. Please check your location settings.');

        },
        {
          enableHighAccuracy: true, //Option for higher resolution
          timeout: 10000, //Waiting time to get the location (in milliseconds)
          maximumAge: 0, // Always get the new location
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }






















  // projectname = "Train Tracker";
  // name = "Team Member";
  // image = "../../assets/Home/img/Team.png";
  // postion = "Full Stack Developer";
  // personalText = "I’ll will help you to build strategy from scratch till deliver";
  // trainlogo = "../../assets/Home/img/train_logo.png"
  // WebsiteTitle = "Discover New Destinations, One Train Journey at a Time with Train Tracker!";
  // toptext = "Experience Tailored Train Journeys and Exceptional Service. Explore New Destinations Without Breaking the Bank!";
  // TitileAbouttext = "Stay on Track with Train Tracker – Your Ultimate Guide to Seamless Train Journeys!";
  // WelcomeText = "Triptopia was born out of a shared passion for exploration and a desire to create meaningful travel experiences. We believe travel is more than just visiting a place";
  // welcomeimage1 = "../../assets/Home/img/Station1.jpg";
  // desttitle = "Discover the best places in the world to visit by train.";
  // desttext = "Our travel platform offers a range of features that make planning your journey simple and enjoyable. With our advanced search and booking tools, finding the perfect train route has never been easier.";
  // KnowText = "Our Train Tracker website offers a range of features and benefits that make navigating your journeys simple and enjoyable. With our advanced scheduling system and real-time tracking, you can easily plan trips, find the best routes, and keep up to date with the latest train schedules, ensuring a smooth and hassle-free travel experience.";

  // features = [
  //   {
  //     title: "Luxury Trip",
  //     description: "Experience a premium journey with our meticulously curated train schedules and destinations.",
  //     image: "../../assets/Home/img/icon-about-1.png"
  //   },
  //   {
  //     title: "Affordable Budget",
  //     description: "Your safety is our priority. We ensure strict security measures to safeguard your information, allowing you to travel worry-free.",
  //     image: "../../assets/Home/img/icon-about-2.png"
  //   },
  //   {
  //     title: "Personalized Approach",
  //     description: "Effortlessly navigate and find the perfect train routes with our user-friendly interface, tailored to meet your travel preferences.",
  //     image: "../../assets/Home/img/icon-about-3.png"
  //   },
  //   {
  //     title: "Experienced Guide",
  //     description: "Our dedicated team is available 24/7 to assist you with any travel-related queries or concerns, ensuring a seamless experience.",
  //     image: "../../assets/Home/img/icon-about-4.png"
  //   }
  // ];
  // destinations = [
  //   {
  //     name: 'Pryde mountains',
  //     location: 'Prydelands',
  //     trips: '100 Trips',
  //     img: 'assets/Home/img/top-spot-img-1.png'
  //   },
  //   {
  //     name: 'Eiffel Tower',
  //     location: 'France',
  //     trips: '150 Trips',
  //     img: 'assets/Home/img/top-spot-img-2.png'
  //   },
  //   {
  //     name: 'Iceland',
  //     location: 'Prydelands',
  //     trips: '100 Trips',
  //     img: 'assets/Home/img/top-spot-img-3.png'
  //   },
  //   {
  //     name: 'Jammu Kashmir',
  //     location: 'Prydelands',
  //     trips: '100 Trips',
  //     img: 'assets/Home/img/top-spot-img-4.png'
  //   },
  //   {
  //     name: 'Bosphorus Trip',
  //     location: 'Prydelands',
  //     trips: '100 Trips',
  //     img: 'assets/Home/img/top-spot-img-5.png'
  //   }
  // ];

  // faqTitle = "Everything You Need to Know About Train Travel";
  // faqs = [
  //   {
  //     question: 'What destinations do you offer tours to?',
  //     answer: 'Triptopia offers a range of services including web development, software development, IT consulting, digital marketing.',
  //     id: 'accordion-r1'
  //   },
  //   {
  //     question: 'What types of service do you provide?',
  //     answer: 'Triptopia offers a range of services including web development, software development, IT consulting, digital marketing.',
  //     id: 'accordion-r2'
  //   },
  //   {
  //     question: 'What is included in the tour package?',
  //     answer: 'Triptopia offers a range of services including web development, software development, IT consulting, digital marketing.',
  //     id: 'accordion-r3'
  //   },
  //   {
  //     question: 'What should I pack for my trip?',
  //     answer: 'Triptopia offers a range of services including web development, software development, IT consulting, digital marketing.',
  //     id: 'accordion-r4'
  //   }
  // ];
  // blogtitle = "Smart Strategies for Planning Your Ideal Train Travel";
  // blogs = [
  //   {
  //     title: 'Tracing Ancient Ruins and Roman Relics',
  //     category: 'Solo Travel',
  //     date: '03 Aug',
  //     image: '../../assets/Home/img/blog-img-1.png',
  //     author: 'Robert Fox',
  //     authorImage: '../../assets/Home/img/user-img-1.png',
  //     link: 'blog-details.html'
  //   },
  //   {
  //     title: 'Honoring History in the Land of Heroes',
  //     category: 'Cody Fisher',
  //     date: '03 Aug',
  //     image: '../../assets/Home/img/blog-img-2.png',
  //     author: 'Cody Fisher',
  //     authorImage: '../../assets/Home/img/user-img-2.png',
  //     link: 'blog-details.html'
  //   },
  //   {
  //     title: 'Witnessing Sunrise Amongst the Statues',
  //     category: 'Group Tour',
  //     date: '03 Aug',
  //     image: '../../assets/Home/img/blog-img-3.png',
  //     author: 'Jerome Bell',
  //     authorImage: '../../assets/Home/img/user-img-3.png',
  //     link: 'blog-details.html'
  //   }
  // ];
  // trendingDestinations = [
  //   {
  //     name: 'Irbid',
  //     image: '../../assets/Home/img/trending-img-1.png',
  //     rating: 5.0,
  //     reviews: 35,
  //     price: 250
  //   },
  //   {
  //     name: 'Amman',
  //     image: '../../assets/Home/img/trending-img-2.png',
  //     rating: 5.0,
  //     reviews: 35,
  //     price: 350
  //   },
  //   {
  //     name: 'Mafraq',
  //     image: '../../assets/Home/img/trending-img-3.png',
  //     rating: 5.0,
  //     reviews: 35,
  //     price: 50
  //   },
  //   {
  //     name: 'Aqaba',
  //     image: '../../assets/Home/img/trending-img-4.png',
  //     rating: 5.0,
  //     reviews: 35,
  //     price: 400
  //   },
  //   {
  //     name: 'Zarqa',
  //     image: '../../assets/Home/img/trending-img-5.png',
  //     rating: 5.0,
  //     reviews: 35,
  //     price: 35
  //   },
  //   {
  //     name: "ma'an",
  //     image: '../../assets/Home/img/trending-img-6.png',
  //     rating: 5.0,
  //     reviews: 35,
  //     price: 90
  //   },
  //   {
  //     name: 'Jarash',
  //     image: '../../assets/Home/img/trending-img-7.png',
  //     rating: 5.0,
  //     reviews: 35,
  //     price: 85
  //   },
  //   {
  //     name: 'Ajloun',
  //     image: '../../assets/Home/img/trending-img-8.png',
  //     rating: 5.0,
  //     reviews: 35,
  //     price: 65
  //   },
  //   {
  //     name: 'Karak',
  //     image: '../../assets/Home/img/trending-img-9.png',
  //     rating: 5.0,
  //     reviews: 35,
  //     price: 200
  //   }
  // ];
  // topdestinations = [
  //   {
  //     station: 'New York',
  //     stationImg: '../../assets/Home/img/destination-img-1.png',
  //     numOfDes: '15 Destinations',
  //   },
  //   {
  //     station: 'Paris',
  //     stationImg: '../../assets/Home/img/destination-img-2.png',
  //     numOfDes: '20 Destinations',
  //   },
  //   {
  //     station: 'Tokyo',
  //     stationImg: '../../assets/Home/img/destination-img-3.png',
  //     numOfDes: '10 Destinations',
  //   },
  //   {
  //     station: 'London',
  //     stationImg: '../../assets/Home/img/destination-img-4.png',
  //     numOfDes: '12 Destinations',
  //   },
  //   {
  //     station: 'Sydney',
  //     stationImg: '../../assets/Home/img/destination-img-5.png',
  //     numOfDes: '8 Destinations',
  //   },
  //   {
  //     station: 'Rome',
  //     stationImg: '../../assets/Home/img/destination-img-6.png',
  //     numOfDes: '16 Destinations',
  //   },
  //   {
  //     station: 'Barcelona',
  //     stationImg: '../../assets/Home/img/destination-img-7.png',
  //     numOfDes: '14 Destinations',
  //   },
  //   {
  //     station: 'Dubai',
  //     stationImg: '../../assets/Home/img/destination-img-8.png',
  //     numOfDes: '18 Destinations',
  //   },

  // ];


}

