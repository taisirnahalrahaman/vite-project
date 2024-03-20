const products = [
    {
      id: 0,
      Name: "Aurora Ascendancy",
      Wishlist: false,
      Price: 10,
      Details: "C",
  
      Details_Image: {
        One: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/18558693/pexels-photo-18558693/free-photo-of-drone-shot-of-the-pier-in-san-diego-california-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/1569012/pexels-photo-1569012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/196642/pexels-photo-196642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 1,
      Name: "Sandstone Serenity",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://images.pexels.com/photos/209798/pexels-photo-209798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/2187603/pexels-photo-2187603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/4058530/pexels-photo-4058530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/2187662/pexels-photo-2187662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 2,
      Name: "Amber Horizon",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://images.pexels.com/photos/16170191/pexels-photo-16170191/free-photo-of-village-and-terraced-fields-on-a-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/18836166/pexels-photo-18836166/free-photo-of-steps-leading-to-setas-de-sevilla-in-seville-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/8791201/pexels-photo-8791201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/12073592/pexels-photo-12073592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 3,
      Name: "Metropolis Melody",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://images.pexels.com/photos/2678456/pexels-photo-2678456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/2676602/pexels-photo-2676602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/4254554/pexels-photo-4254554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/161830/venice-cruise-mediterranean-architecture-161830.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 4,
      Name: "Mystic Woods",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://images.pexels.com/photos/2872875/pexels-photo-2872875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/247597/pexels-photo-247597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/2481190/pexels-photo-2481190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/5659352/pexels-photo-5659352.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 5,
      Name: "Sunshine Oasis",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://images.pexels.com/photos/2745254/pexels-photo-2745254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=600",
        Four: "https://images.pexels.com/photos/1477156/pexels-photo-1477156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 6,
      Name: "Wilderness Wonder",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=600",
        Four: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 7,
      Name: "Cabin Coziness",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/361724/pexels-photo-361724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/346972/pexels-photo-346972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 8,
      Name: "Marine Marvel",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://cdn.pixabay.com/photo/2017/02/12/17/35/sunbeam-2060662_1280.jpg",
        Two: "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0=",
        Three:
          "https://media.istockphoto.com/id/1347094484/photo/forest-with-bright-sun-shining-through-the-trees-covered-with-green-moss.jpg?s=2048x2048&w=is&k=20&c=TO8KGRr4iDLmy_0eciL455Ix_H4p3e0FJdpF2dnhse4=",
        Four: "https://media.istockphoto.com/id/1347094484/photo/forest-with-bright-sun-shining-through-the-trees-covered-with-green-moss.jpg?s=2048x2048&w=is&k=20&c=TO8KGRr4iDLmy_0eciL455Ix_H4p3e0FJdpF2dnhse4=",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 9,
      Name: "Majestic Summit",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://images.pexels.com/photos/145712/pexels-photo-145712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/145712/pexels-photo-145712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/8488515/pexels-photo-8488515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/9176703/pexels-photo-9176703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 10,
      Name: "Tranquil Waterside",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://img.freepik.com/free-photo/space-travel-collage-design_23-2150163757.jpg?t=st=1710032067~exp=1710035667~hmac=9163ec3e1cd9634e0a8dbd6ce4d49f10f83ed9146065c9cf3920c50af9b99e30&w=1060",
        Two: "https://img.freepik.com/free-photo/space-travel-collage-design_23-2150163740.jpg?t=st=1710032083~exp=1710035683~hmac=c83ef82a27d168cc736d7b5d2eef951a2e9b0bc457bc7bcc595334770beaca06&w=1060",
        Three:
          "https://img.freepik.com/free-photo/space-travel-collage-design_23-2150163784.jpg?t=st=1710032133~exp=1710035733~hmac=7d068bab9f9884de43e45e5354549f1e95e3e1d0de17cb0ec92f6a7ff25aab64&w=1060",
        Four: "https://img.freepik.com/free-photo/space-travel-collage-design_23-2150163785.jpg?t=st=1710032164~exp=1710035764~hmac=cdf592cbefd66a96c4c50d41d3e626e75fa744808eb0e4954204dff744da5f85&w=1060",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 11,
      Name: "Emerald Valley",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://img.freepik.com/free-photo/night-sky-glows-with-iridescent-deep-space-generative-ai_188544-11285.jpg?t=st=1710032241~exp=1710035841~hmac=541f86fbbfceffea985696ca4b7dca1b8ed81c4f43253bf53b2793aacbc68f12&w=1380",
        Two: "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1710031476~exp=1710035076~hmac=3e0a039dad304eed00dff04b2c6563030b37cb2bba1f7c67ac37d59d234c3819&w=1060",
        Three:
          "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-3_1562-748.jpg?t=st=1710031534~exp=1710035134~hmac=a38ea22c0c52bc198df43302b3271e2f8ad18b2fad388434069c2e821a5bbb7a&w=1060",
        Four: "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-2_1562-747.jpg?t=st=1710031576~exp=1710035176~hmac=56a92a8284fc59f816bfe3223bbd3338708f33583f1aad2bcf4388e6b8995c55&w=1060",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 12,
      Name: "Coastal Comfort",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/18558693/pexels-photo-18558693/free-photo-of-drone-shot-of-the-pier-in-san-diego-california-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/1569012/pexels-photo-1569012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/196642/pexels-photo-196642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 13,
      Name: "Halcyon Haven",
      Wishlist: false,
      Price: 10,
      Details: "C",
      Details_Image: {
        One: "https://img.freepik.com/free-photo/spaceship-orbits-dark-galaxy-glowing-blue-comet-generated-by-ai_188544-9662.jpg?t=st=1710031663~exp=1710035263~hmac=c5633cb8c837352ca8345921668b27df8fde484d1c8f70e08f2a776371a07366&w=1380",
        Two: "https://img.freepik.com/free-photo/night-sky-glows-with-iridescent-deep-space-generative-ai_188544-11285.jpg?t=st=1710031675~exp=1710035275~hmac=40faa26886e1b82983e22adcce0839e5d12bc7dff2bcfd11537faecb1468da37&w=1380",
        Three:
          "https://img.freepik.com/premium-photo/deep-space-landscape-with-realistic-planets-elements-this-image-furnished-by-nasa_112293-526.jpg?w=1060",
        Four: "https://img.freepik.com/premium-photo/gigantic-asteroids-about-crash-earth-3d-rendering_117023-102.jpg?w=1480",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 14,
      Name: "Peak Ascension",
      Wishlist: false,
      Price: 10,
      Details: "C",
  
      Details_Image: {
        One: "https://images.pexels.com/photos/4159867/pexels-photo-4159867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/2984482/pexels-photo-2984482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/13916629/pexels-photo-13916629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/4160022/pexels-photo-4160022.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 15,
      Name: "Crimson Cascade",
      Wishlist: false,
      Price: 10,
      Details: "C",
  
      Details_Image: {
        One: "https://images.pexels.com/photos/13895589/pexels-photo-13895589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/13895589/pexels-photo-13895589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/4074168/pexels-photo-4074168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/17291134/pexels-photo-17291134/free-photo-of-white-cows-on-pasture.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 16,
      Name: "Azure Echoes",
      Wishlist: false,
      Price: 10,
      Details: "C",
  
      Details_Image: {
        One: "https://images.pexels.com/photos/2734421/pexels-photo-2734421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/2162442/pexels-photo-2162442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 17,
      Name: "Whispering Willows",
      Wishlist: false,
      Price: 10,
      Details: "C",
  
      Details_Image: {
        One: "https://images.pexels.com/photos/1480807/pexels-photo-1480807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 18,
      Name: "Emerald Oasis",
      Wishlist: false,
      Price: 10,
      Details: "C",
  
      Details_Image: {
        One: "https://images.pexels.com/photos/1480807/pexels-photo-1480807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/1668246/pexels-photo-1668246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 19,
      Name: "Mystic Meadows",
      Wishlist: false,
      Price: 10,
      Details: "C",
  
      Details_Image: {
        One: "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/3651084/pexels-photo-3651084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 20,
      Name: "Harmonic Horizons",
      Wishlist: false,
      Price: 10,
      Details: "C",
  
      Details_Image: {
        One: "https://images.pexels.com/photos/20463880/pexels-photo-20463880/free-photo-of-golden-sunrise-reflection-on-vermilion-lakes-banff-alberta-canada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/2401980/pexels-photo-2401980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/1525050/pexels-photo-1525050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
    {
      id: 21,
      Name: "Luminous Lagoon",
      Wishlist: false,
      Price: 10,
      Details: "C",
  
      Details_Image: {
        One: "https://images.pexels.com/photos/19811506/pexels-photo-19811506/free-photo-of-sunrise-in-arches-national-park-utah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Two: "https://images.pexels.com/photos/18239295/pexels-photo-18239295/free-photo-of-aerial-view-of-the-bryce-canyon-national-park-in-utah-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Three:
          "https://images.pexels.com/photos/16516048/pexels-photo-16516048/free-photo-of-canyon-in-red-rock-state-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Four: "https://images.pexels.com/photos/13327568/pexels-photo-13327568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      Tags: {
        ChildFriendly: Math.random() < 0.5,
        Hiking: Math.random() < 0.5,
        Beach: true,
        EpicChallenges: Math.random() < 0.5,
        VirtualExperiences: Math.random() < 0.5,
        Awayfromthechaos: Math.random() < 0.5,
        FiveStars: true,
        OtherStar: false,
        DiscountedDeals: Math.random() < 0.5,
        FreeCancellations: Math.random() < 0.5,
        PrivateGroups: Math.random() < 0.5,
        NewOnEntrada: Math.random() < 0.5,
        EntradaSpecials: Math.random() < 0.5,
      },
    },
  ];
  
  export default products;