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
            image: "assets/images/gallery/photo2.png",
            title: "Urban Lights",
            category: "Photography",
            link: "photography/project1.html"
        },
        {
            image: "assets/images/gallery/photo3.png",
            title: "Architectural Details",
            category: "Mechanical Design",
            link: "mechanical-design/project1.html"
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
            { title: "Architectural Details", link: "mechanical-design/project1.html" },
            { title: "Articulated Compliant Gripper", link: "mechanical-design/articulated-gripper.html" },
            { title: "Compliant Finger Design", link: "mechanical-design/compliant-finger.html" },
            { title: "Shade Shifter", link: "mechanical-design/shade-shifter.html" },
            { title: "Wrench Whisperer", link: "mechanical-design/wrench-whisperer.html" },
            { title: "Tilt-A-Bowl", link: "mechanical-design/tilt-a-bowl.html" },
            { title: "Compressor Conversion", link: "mechanical-design/compressor-conversion.html" },
            { title: "Automatic Chicken Door", link: "mechanical-design/chicken-door.html" },
            { title: "Chain Mail", link: "mechanical-design/chain-mail.html" }
        ],
        photography: [
            { title: "Urban Lights", link: "photography/project1.html" },
            { title: "More Photographyyy", link: "photography/project2.html" }
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
