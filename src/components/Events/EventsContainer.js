import React from 'react'
import EventSection from './EventSection'
import '../../styles/Events/EventsContainer.css'

export default function EventsContainer() {
    //dummy data for all events
    const events = [
        {
            event_type: 'Tour and Travel',
            event_list: [
                {
                    title: 'Beautiful Beaches Tour',
                    description: 'Explore the most beautiful beaches in Goa.',
                    location: 'Goa, India',
                    registered: '12K',
                    ratings: 4.5,
                    date: '20 July, 23',
                    image_url: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabianwiktor-994605.jpg&fm=jpg'
                },
                {
                    title: 'Historic Monuments Tour',
                    description: 'Visit the historic monuments in Delhi.',
                    location: 'Delhi, India',
                    registered: '8K',
                    ratings: 4.7,
                    date: '15 August, 23',
                    image_url: 'https://www.justahotels.com/wp-content/uploads/2023/10/Places-To-Visit-in-Manali.jpg'
                },
                {
                    title: 'Kerala Backwaters Tour',
                    description: 'Experience the serene backwaters of Kerala.',
                    location: 'Kerala, India',
                    registered: '9K',
                    ratings: 4.6,
                    date: '05 September, 23',
                    image_url: 'https://manalitourism.co.in/images/stories/best-time-to-visit-manali/manali-weather-in-winter-best-time-to-visit-manali.jpg'
                },
                {
                    title: 'Rajasthan Desert Safari',
                    description: 'Enjoy a desert safari in Rajasthan.',
                    location: 'Jaisalmer, India',
                    registered: '7K',
                    ratings: 4.8,
                    date: '25 October, 23',
                    image_url: 'https://th-thumbnailer.cdn-si-edu.com/KPHiwfaC7pBGVYeQOt3_RF6L4Dw=/800x450/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg'
                },
                {
                    title: 'Andaman Islands Adventure',
                    description: 'Discover the beauty of Andaman Islands.',
                    location: 'Andaman, India',
                    registered: '10K',
                    ratings: 4.7,
                    date: '10 November, 23',
                    image_url: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1656091428_cf69d9a9dbec82018046.jpg'
                }
            ]
        },
        {
            event_type: 'Tour and Travel',
            event_list: [
                {
                    title: 'Beautiful Beaches Tour',
                    description: 'Explore the most beautiful beaches in Goa.',
                    location: 'Goa, India',
                    registered: '12K',
                    ratings: 4.5,
                    date: '20 July, 23',
                    image_url: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabianwiktor-994605.jpg&fm=jpg'
                },
                {
                    title: 'Historic Monuments Tour',
                    description: 'Visit the historic monuments in Delhi.',
                    location: 'Delhi, India',
                    registered: '8K',
                    ratings: 4.7,
                    date: '15 August, 23',
                    image_url: 'https://www.justahotels.com/wp-content/uploads/2023/10/Places-To-Visit-in-Manali.jpg'
                },
                {
                    title: 'Kerala Backwaters Tour',
                    description: 'Experience the serene backwaters of Kerala.',
                    location: 'Kerala, India',
                    registered: '9K',
                    ratings: 4.6,
                    date: '05 September, 23',
                    image_url: 'https://manalitourism.co.in/images/stories/best-time-to-visit-manali/manali-weather-in-winter-best-time-to-visit-manali.jpg'
                },
                {
                    title: 'Rajasthan Desert Safari',
                    description: 'Enjoy a desert safari in Rajasthan.',
                    location: 'Jaisalmer, India',
                    registered: '7K',
                    ratings: 4.8,
                    date: '25 October, 23',
                    image_url: 'https://th-thumbnailer.cdn-si-edu.com/KPHiwfaC7pBGVYeQOt3_RF6L4Dw=/800x450/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg'
                },
                {
                    title: 'Andaman Islands Adventure',
                    description: 'Discover the beauty of Andaman Islands.',
                    location: 'Andaman, India',
                    registered: '10K',
                    ratings: 4.7,
                    date: '10 November, 23',
                    image_url: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1656091428_cf69d9a9dbec82018046.jpg'
                }
            ]
        },
        {
            event_type: 'Tour and Travel',
            event_list: [
                {
                    title: 'Beautiful Beaches Tour',
                    description: 'Explore the most beautiful beaches in Goa.',
                    location: 'Goa, India',
                    registered: '12K',
                    ratings: 4.5,
                    date: '20 July, 23',
                    image_url: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabianwiktor-994605.jpg&fm=jpg'
                },
                {
                    title: 'Historic Monuments Tour',
                    description: 'Visit the historic monuments in Delhi.',
                    location: 'Delhi, India',
                    registered: '8K',
                    ratings: 4.7,
                    date: '15 August, 23',
                    image_url: 'https://www.justahotels.com/wp-content/uploads/2023/10/Places-To-Visit-in-Manali.jpg'
                },
                {
                    title: 'Kerala Backwaters Tour',
                    description: 'Experience the serene backwaters of Kerala.',
                    location: 'Kerala, India',
                    registered: '9K',
                    ratings: 4.6,
                    date: '05 September, 23',
                    image_url: 'https://manalitourism.co.in/images/stories/best-time-to-visit-manali/manali-weather-in-winter-best-time-to-visit-manali.jpg'
                },
                {
                    title: 'Rajasthan Desert Safari',
                    description: 'Enjoy a desert safari in Rajasthan.',
                    location: 'Jaisalmer, India',
                    registered: '7K',
                    ratings: 4.8,
                    date: '25 October, 23',
                    image_url: 'https://th-thumbnailer.cdn-si-edu.com/KPHiwfaC7pBGVYeQOt3_RF6L4Dw=/800x450/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg'
                },
                {
                    title: 'Andaman Islands Adventure',
                    description: 'Discover the beauty of Andaman Islands.',
                    location: 'Andaman, India',
                    registered: '10K',
                    ratings: 4.7,
                    date: '10 November, 23',
                    image_url: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1656091428_cf69d9a9dbec82018046.jpg'
                }
            ]
        },
    ];
    
  return (
    <div className='eventsContainer'>
    {
     events.map((event)=>(
       <EventSection event={event}/>
     ))
     }
    </div>
  )
}
