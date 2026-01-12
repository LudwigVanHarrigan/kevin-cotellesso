// Portfolio Configuration
// Edit this file to customize your portfolio content

const portfolioConfig = {
    // Personal Information
    name: "Kevin Cotellesso",
    email: "contact@example.com",
    linkedin: "linkedin.com/in/kevincotellesso",
    github: "github.com/kevincotellesso",

    // Hero Section
    hero: {
        title: "Welcome to My Portfolio",
        subtitle: "Explore my creative work across multiple mediums"
    },

    // Highlights for Home Page
    highlights: [
        {
            image: "assets/images/gallery/photo1.png",
            title: "Geometric Harmony",
            category: "Research",
            link: "research/project1.html"
        },
        {
            image: "assets/images/photography/frozen_world/P1170189.JPG",
            title: "Frozen World",
            category: "Photography",
            link: "photography/frozen-world.html"
        }
    ],

    // Project Data by Category (for future use/dynamic loading if needed)
    projects: {
        research: [
            { title: "Geometric Harmony", link: "research/project1.html" },
            { title: "Jaw-based HMI", link: "research/jaw-hmi.html" },
            { title: "Microextrusion Optimization", link: "research/microextrusion-optimization.html" },
            { title: "Diffusion Modeling", link: "research/diffusion-modeling.html" }
        ],
        mechanical: [
            { title: "Compliant Gripper Design", link: "mechanical-design/compliant-gripper.html" },
            { title: "Shade Shifter", link: "mechanical-design/shade-shifter.html" },
            { title: "Wrench Whisperer", link: "mechanical-design/wrench-whisperer.html" },
            { title: "Tilt-A-Bowl", link: "mechanical-design/tilt-a-bowl.html" },
            { title: "Compressor Conversion", link: "mechanical-design/compressor-conversion.html" },
            { title: "Automatic Chicken Door", link: "mechanical-design/chicken-door.html" },
            { title: "Chain Mail", link: "mechanical-design/chain-mail.html" }
        ],
        photography: [
            { title: "Frozen World", link: "photography/frozen-world.html", image: "assets/images/photography/frozen_world/P1170189.JPG" },
            { title: "Animals", link: "photography/animals.html", image: "assets/images/photography/animals/20230911_033905000_iOS.jpg" },
            { title: "Flowers", link: "photography/flowers.html", image: "assets/images/photography/flowers/20240503_162208000_iOS.jpg" },
            { title: "Humans", link: "photography/humans.html", image: "assets/images/photography/humans/20240706_030817000_iOS.jpg" },
            { title: "Insects", link: "photography/insects.html", image: "assets/images/photography/insects/20240609_024612000_iOS.jpg" },
            { title: "Nature", link: "photography/nature.html", image: "assets/images/photography/nature/20240314_030255000_iOS.jpg" },
            { title: "Vehicles", link: "photography/vehicles.html", image: "assets/images/photography/vehicles/20231116_174803000_iOS.jpg" }
        ],
        music: []
    },

    // Video Portfolio
    // Add your videos to assets/videos/ folder
    videos: [
        {
            src: "assets/videos/GripperMontage.mp4",
            title: "Gripper Montage",
            description: "A montage of my gripper project."
        }
    ],

    // Audio Works
    // Add your audio files to assets/audio/ folder
    audio: [],

    // Documents
    // Add your PDFs and documents to assets/documents/ folder
    documents: []
};
