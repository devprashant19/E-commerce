// BLOG DATA
const BLOG_POSTS = [
    {
        id: 1,
        title: "The Cotton Jersey Zip-Up Hoodie",
        category: "trends",
        date: "13 Jan",
        readTime: "5 min read",
        image: "assets/images/b19.jpg",
        excerpt: "Explore the latest trends in fashion and discover how modern streetwear is changing the ecommerce clothing industry.",
        author: "Aria Sterling",
        authorTitle: "Senior Fashion Editor",
        authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
        content: `
            <p>Streetwear has officially transitioned from a niche subculture to a dominant force in the global fashion industry. The cotton jersey zip-up hoodie is at the absolute center of this revolution. No longer just a gym essential, it has become a staple of modern luxury and casual wear alike.</p>
            <p>In this case study, we dive into how the rise of high-quality fabrics, minimalist aesthetics, and versatile layering options has transformed the humble zip-up into a must-have wardrobe cornerstone. E-commerce platforms have seen an unprecedented 45% increase in searches for premium fleece items over the last quarter alone.</p>
            <p>Whether styled with tailored trousers for a smart-casual look or paired with matching joggers for the ultimate streetwear silhouette, the zip-up hoodie offers unmatched versatility. The key lies in the fabric weight—heavyweight combed cotton provides structure and longevity, ensuring that comfort never comes at the cost of style.</p>
            <p>Ultimately, modern consumers demand clothing that can keep up with a fluid lifestyle. A premium cotton zip-up hoodie bridges the gap between home comfort and outdoor sophistication with ease.</p>
        `
    },
    {
        id: 2,
        title: "How To Style Winter Collection",
        category: "styling",
        date: "15 Feb",
        readTime: "4 min read",
        image: "assets/images/b4.jpg",
        excerpt: "Winter fashion essentials are here. Learn how to create the perfect winter wardrobe with trendy outfits.",
        author: "Julian Mercer",
        authorTitle: "Lead Stylist",
        authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
        content: `
            <p>When the temperature drops, styling becomes a game of textures and layers. A great winter wardrobe isn't just about staying warm; it's about combining weights, materials, and silhouettes to create visual depth and sophistication.</p>
            <p>This winter season, we're seeing a shift towards earthy tones—olive greens, rich chocolates, and warm beige—balanced by pops of bold cobalt blue and rust orange. The key to successful layering is starting thin and working your way up. Begin with a high-quality thermal or cotton crewneck, add a structured knit mid-layer, and finish with a heavy wool overcoat or windproof puffer.</p>
            <p>Remember, accessories are your secret weapon in cold weather. A chunky rib-knit beanie and a cashmere scarf don't just shield you from the wind; they serve as critical focal points that can elevate a simple outfit into a fashion statement.</p>
            <p>Experiment with contrasting fits as well: pair slim-cut fleece thermals under oversized, structured trench coats for a modern, balanced silhouette that commands attention.</p>
        `
    },
    {
        id: 3,
        title: "Must Have Streetwear Outfits",
        category: "trends",
        date: "22 Mar",
        readTime: "6 min read",
        image: "assets/images/b18.jpg",
        excerpt: "Street fashion continues to dominate modern ecommerce stores. Discover the most popular styles this season.",
        author: "Kiana Thorne",
        authorTitle: "Trend Analyst",
        authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
        content: `
            <p>Streetwear is constantly evolving, driven by music, art, and youth culture. This season, the look is bolder and more relaxed than ever. Oversized fits, utility pockets, and retro sneakers are the defining pillars of the current aesthetic.</p>
            <p>If you're looking to upgrade your street wardrobe, start with three key items: a pair of wide-leg cargo pants, a graphic heavyweight tee, and a retro-inspired collegiate bomber jacket. These items can be mixed and matched endlessly to create layouts that look effortless yet highly styled.</p>
            <p>Footwear remains the anchor of any streetwear fit. Clean leather low-tops or chunky technical runners provide the foundation. Remember, confidence is the most critical accessory when wearing streetwear—wear the clothes, don't let them wear you.</p>
            <p>Furthermore, streetwear values custom self-expression. Mixing vintage thrifted pieces with brand new drops is a fantastic way to carve out a unique look that sets you apart from the crowd.</p>
        `
    },
    {
        id: 4,
        title: "Top Accessories For 2026",
        category: "lifestyle",
        date: "10 Apr",
        readTime: "3 min read",
        image: "assets/images/b7.jpg",
        excerpt: "Accessories can completely transform your outfit. Check out the latest trending fashion accessories for this year.",
        author: "Marcus Vance",
        authorTitle: "Accessories Designer",
        authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
        content: `
            <p>It is often said that details make the design, and nowhere is this truer than in personal styling. Accessories are the exclamation point of an outfit. For 2026, accessories are taking center stage with bold, metallic accents and structured, geometric leather goods.</p>
            <p>We're seeing a massive resurgence in silver jewelry—specifically chunky link chains and industrial-style rings. On the functional side, micro-bags are giving way to oversized, slouchy tote bags and structured crossbody sling packs that blend utility with a high-fashion look.</p>
            <p>When selecting accessories, follow the rule of balance: if your outfit is loud or colorful, opt for clean and minimal accessories. If you're wearing monochrome or simple layers, let a bold belt buckle, a statement necklace, or a metallic watch do the talking.</p>
        `
    },
    {
        id: 5,
        title: "E-Commerce Styling & Creative Direction",
        category: "ecommerce",
        date: "02 May",
        readTime: "7 min read",
        image: "assets/images/b10.jpg",
        excerpt: "How styling and art direction on product pages can double conversion rates for fashion brands.",
        author: "Dante Cross",
        authorTitle: "Art Director",
        authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
        content: `
            <p>In online fashion, presentation is everything. When customers cannot touch or try on clothing, your images and styling must carry the entire weight of their buying decision. Creative direction is not just about making things look pretty; it's about building trust and clarifying fit.</p>
            <p>Our analysis of leading e-commerce platforms shows that brands with highly styled, contextual editorial imagery (showing products in real-life settings) see up to a 60% higher conversion rate compared to brands using only flat-lays or white-background studio shots. Context tells a story, and stories drive connection.</p>
            <p>When styling for e-commerce, consistency is paramount. Developing a signature lighting profile, using model poses that reflect your brand personality, and showing clothes in motion will establish a cohesive look that keeps customers coming back.</p>
            <p>Investing in clear size guides, video walks of models wearing the garments, and diverse styling combinations pays off immediately by decreasing return rates and increasing consumer satisfaction.</p>
        `
    },
    {
        id: 6,
        title: "Sustainable Wardrobe Guide",
        category: "guides",
        date: "18 May",
        readTime: "8 min read",
        image: "assets/images/b2.jpg",
        excerpt: "A beginner's guide to building an eco-friendly wardrobe with high quality capsule collections.",
        author: "Elena Rostova",
        authorTitle: "Eco-Fashion Consultant",
        authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
        content: `
            <p>Fast fashion has a massive impact on our environment. But building a sustainable wardrobe doesn't mean throwing away your current clothes or spending a fortune. It starts with a shift in mindset: buying less, choosing well, and making things last.</p>
            <p>A capsule wardrobe is the perfect entry point. By selecting 15 to 20 high-quality, versatile items that can be mixed and matched, you can create over 50 unique outfits. Focus on organic fabrics like linen, organic cotton, Tencel, and recycled wool. These fibers are not only kinder to the earth but are far more durable than synthetic alternatives.</p>
            <p>Finally, caring for your garments is the ultimate sustainability practice. Wash clothes less frequently, use cold water, and air-dry whenever possible. Taking care of your clothing extends its life cycle, keeping textiles out of landfills and saving you money in the long run.</p>
        `
    }
];

// STATE MANAGEMENT
let currentCategory = "all";
let searchQuery = "";

// DOM ELEMENTS
const blogGrid = document.getElementById("blog-grid");
const searchInput = document.getElementById("blog-search");
const categoryButtons = document.querySelectorAll(".category-btn");
const blogModal = document.getElementById("blog-modal");
const blogModalClose = document.getElementById("blog-modal-close");
const blogModalBody = document.getElementById("blog-modal-body");
const newsletterBtn = document.getElementById("newsletter-btn");
const newsletterEmail = document.getElementById("newsletter-email");

// RENDER CARDS
function renderBlogPosts() {
    // Filter posts
    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesCategory = currentCategory === "all" || post.category === currentCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery) ||
                              post.excerpt.toLowerCase().includes(searchQuery) ||
                              post.category.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // Clear grid
    blogGrid.innerHTML = "";

    // Check if no results
    if (filteredPosts.length === 0) {
        blogGrid.innerHTML = `
            <div class="no-results">
                <i class="far fa-frown"></i>
                <p>No articles found matching your criteria.</p>
                <button onclick="resetFilters()">Reset Filters</button>
            </div>
        `;
        return;
    }

    // Render cards
    filteredPosts.forEach(post => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.setAttribute("data-id", post.id);

        card.innerHTML = `
            <div class="blog-img">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
                <span class="blog-date">${post.date}</span>
            </div>
            <div class="blog-details">
                <div class="blog-meta">
                    <span class="category-tag ${post.category}">${post.category}</span>
                    <span class="read-time"><i class="far fa-clock"></i> ${post.readTime}</span>
                </div>
                <h4>${post.title}</h4>
                <p>${post.excerpt}</p>
                <a href="javascript:void(0)" class="read-more-btn" data-id="${post.id}">
                    CONTINUE READING <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        blogGrid.appendChild(card);
    });

    // Rebind detail listeners
    bindReadMoreButtons();
}

// BIND READ MORE ACTION
function bindReadMoreButtons() {
    const buttons = document.querySelectorAll(".read-more-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const postId = parseInt(btn.getAttribute("data-id"));
            openArticleModal(postId);
        });
    });
}

// OPEN MODAL
function openArticleModal(id) {
    const post = BLOG_POSTS.find(p => p.id === id);
    if (!post) return;

    blogModalBody.innerHTML = `
        <img class="modal-hero-img" src="${post.image}" alt="${post.title}">
        <div class="modal-meta">
            <span class="category-tag ${post.category}">${post.category}</span>
            <span>•</span>
            <span>${post.date}</span>
            <span>•</span>
            <span><i class="far fa-clock"></i> ${post.readTime}</span>
        </div>
        <h2 class="modal-title">${post.title}</h2>
        <div class="modal-author-info">
            <img class="author-avatar" src="${post.authorAvatar}" alt="${post.author}">
            <div class="author-details">
                <span class="author-name">${post.author}</span>
                <span class="author-title">${post.authorTitle}</span>
            </div>
        </div>
        <div class="modal-text">
            ${post.content}
        </div>
        <div class="modal-share">
            <span>Share Article:</span>
            <button class="share-btn" onclick="shareArticle('twitter', '${encodeURIComponent(post.title)}')" aria-label="Share on Twitter">
                <i class="fab fa-twitter"></i>
            </button>
            <button class="share-btn" onclick="shareArticle('facebook', '${encodeURIComponent(post.title)}')" aria-label="Share on Facebook">
                <i class="fab fa-facebook-f"></i>
            </button>
            <button class="share-btn" onclick="shareArticle('linkedin', '${encodeURIComponent(post.title)}')" aria-label="Share on Linkedin">
                <i class="fab fa-linkedin-in"></i>
            </button>
            <button class="share-btn" onclick="copyLink()" aria-label="Copy article link">
                <i class="fas fa-link"></i>
            </button>
        </div>
    `;

    blogModal.classList.add("active");
    document.body.style.overflow = "hidden"; // disable background scrolling
}

// CLOSE MODAL
function closeArticleModal() {
    blogModal.classList.remove("active");
    document.body.style.overflow = ""; // enable background scrolling
}

// RESET FILTERS
window.resetFilters = function() {
    currentCategory = "all";
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    
    categoryButtons.forEach(btn => {
        if (btn.getAttribute("data-category") === "all") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderBlogPosts();
};

// SHARE & LINK COPY MOCKS
window.shareArticle = function(platform, title) {
    const url = window.location.href;
    let shareUrl = "";
    if (platform === "twitter") {
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
    } else if (platform === "facebook") {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "linkedin") {
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    }
    window.open(shareUrl, "_blank", "width=600,height=400");
};

window.copyLink = function() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        if (window.showToast) {
            window.showToast("Article link copied to clipboard!", "success");
        } else {
            alert("Article link copied to clipboard!");
        }
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
};

// INITIALIZATION & LISTENERS
document.addEventListener("DOMContentLoaded", () => {
    // Render initially
    renderBlogPosts();

    // Category filter clicks
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            renderBlogPosts();
        });
    });

    // Live search input
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderBlogPosts();
        });
    }

    // Close modal triggers
    if (blogModalClose) {
        blogModalClose.addEventListener("click", closeArticleModal);
    }

    if (blogModal) {
        blogModal.addEventListener("click", (e) => {
            if (e.target === blogModal) {
                closeArticleModal();
            }
        });
    }

    // ESC key close
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && blogModal.classList.contains("active")) {
            closeArticleModal();
        }
    });

    // Newsletter submit handler
    if (newsletterBtn && newsletterEmail) {
        newsletterBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const email = newsletterEmail.value.trim();
            if (!email) {
                if (window.showToast) {
                    window.showToast("Please enter a valid email address.", "warning");
                } else {
                    alert("Please enter a valid email address.");
                }
                return;
            }
            
            // Email regex validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                if (window.showToast) {
                    window.showToast("Please enter a valid email address format.", "error");
                } else {
                    alert("Please enter a valid email address format.");
                }
                return;
            }

            // Success feedback
            if (window.showToast) {
                window.showToast("Thank you! You have successfully subscribed to our newsletter.", "success");
            } else {
                alert("Thank you! You have successfully subscribed to our newsletter.");
            }
            newsletterEmail.value = "";
        });
    }
});