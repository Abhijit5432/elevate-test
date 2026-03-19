const jobs = [
    { id: 1, title: 'Software Engineer, Front End, Core Consumer', company: 'Google', location: 'Bangalore, India (Hybrid)', type: 'Full-time', salary: '₹35L - ₹45L', tags: ['React', 'TypeScript', 'Web Vitals'], posted: '2 hours ago' },
    { id: 2, title: 'Software Development Engineer II (SDE II)', company: 'Amazon', location: 'Hyderabad, India (On-site)', type: 'Full-time', salary: '₹40L - ₹55L', tags: ['Java', 'AWS DynamoDB', 'System Design'], posted: '5 hours ago' },
    { id: 3, title: 'Senior Data Scientist, Copilot AI', company: 'Microsoft', location: 'Remote', type: 'Full-time', salary: '₹45L - ₹60L', tags: ['Python', 'PyTorch', 'LLMs'], posted: '1 day ago' },
    { id: 4, title: 'Software Engineer, Internal Tools', company: 'Atlassian', location: 'Bangalore, India (Hybrid)', type: 'Full-time', salary: '₹25L - ₹35L', tags: ['Node.js', 'React', 'GraphQL'], posted: '2 days ago' },
    { id: 5, title: 'Machine Learning Engineer, Recommendations', company: 'Netflix', location: 'Remote', type: 'Full-time', salary: '₹60L - ₹80L', tags: ['Python', 'Spark', 'TensorFlow'], posted: '3 days ago' },
    { id: 6, title: 'Backend Engineer, Payments Infrastructure', company: 'Stripe', location: 'Remote', type: 'Full-time', salary: '₹50L - ₹70L', tags: ['Ruby', 'Go', 'Distributed Systems'], posted: '1 week ago' }
];

const dsaTopics = [
    { id: 'arrays', title: 'Arrays & Hashing', progress: 0, problems: [
        { id: '1', title: 'Two Sum', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/two-sum/' },
        { id: '2', title: 'Contains Duplicate', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/contains-duplicate/' },
        { id: '3', title: 'Valid Anagram', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/valid-anagram/' },
        { id: '4', title: 'Group Anagrams', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/group-anagrams/' },
        { id: '5', title: 'Top K Frequent Elements', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/top-k-frequent-elements/' },
        { id: '6', title: 'Product of Array Except Self', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/product-of-array-except-self/' }
    ]},
    { id: 'pointers', title: 'Two Pointers', progress: 0, problems: [
        { id: '7', title: 'Valid Palindrome', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/valid-palindrome/' },
        { id: '8', title: 'Two Sum II', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
        { id: '9', title: '3Sum', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/3sum/' },
        { id: '10', title: 'Container With Most Water', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/container-with-most-water/' }
    ]},
    { id: 'slidingwindow', title: 'Sliding Window', progress: 0, problems: [
        { id: '11', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
        { id: '12', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
        { id: '13', title: 'Longest Repeating Character Replacement', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
        { id: '14', title: 'Minimum Window Substring', difficulty: 'Hard', status: 'Unsolved', url: 'https://leetcode.com/problems/minimum-window-substring/' }
    ]},
    { id: 'stack', title: 'Stack', progress: 0, problems: [
        { id: '15', title: 'Valid Parentheses', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/valid-parentheses/' },
        { id: '16', title: 'Min Stack', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/min-stack/' },
        { id: '17', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
        { id: '18', title: 'Daily Temperatures', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/daily-temperatures/' }
    ]},
    { id: 'binarysearch', title: 'Binary Search', progress: 0, problems: [
        { id: '19', title: 'Binary Search', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/binary-search/' },
        { id: '20', title: 'Search a 2D Matrix', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/search-a-2d-matrix/' },
        { id: '21', title: 'Koko Eating Bananas', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/koko-eating-bananas/' },
        { id: '22', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' }
    ]},
    { id: 'linkedlist', title: 'Linked List', progress: 0, problems: [
        { id: '23', title: 'Reverse Linked List', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/reverse-linked-list/' },
        { id: '24', title: 'Merge Two Sorted Lists', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
        { id: '25', title: 'Reorder List', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/reorder-list/' },
        { id: '26', title: 'Remove Nth Node From End of List', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
        { id: '27', title: 'Linked List Cycle', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/linked-list-cycle/' }
    ]},
    { id: 'trees', title: 'Trees', progress: 0, problems: [
        { id: '28', title: 'Invert Binary Tree', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/invert-binary-tree/' },
        { id: '29', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
        { id: '30', title: 'Diameter of Binary Tree', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
        { id: '31', title: 'Balanced Binary Tree', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/balanced-binary-tree/' },
        { id: '32', title: 'Same Tree', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/same-tree/' },
        { id: '33', title: 'Subtree of Another Tree', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/subtree-of-another-tree/' },
        { id: '34', title: 'Lowest Common Ancestor of a BST', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' }
    ]},
    { id: 'graphs', title: 'Graphs', progress: 0, problems: [
        { id: '35', title: 'Number of Islands', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/number-of-islands/' },
        { id: '36', title: 'Max Area of Island', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/max-area-of-island/' },
        { id: '37', title: 'Clone Graph', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/clone-graph/' },
        { id: '38', title: 'Course Schedule', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/course-schedule/' }
    ]},
    { id: 'dp', title: '1-D Dynamic Programming', progress: 0, problems: [
        { id: '39', title: 'Climbing Stairs', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/climbing-stairs/' },
        { id: '40', title: 'Min Cost Climbing Stairs', difficulty: 'Easy', status: 'Unsolved', url: 'https://leetcode.com/problems/min-cost-climbing-stairs/' },
        { id: '41', title: 'House Robber', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/house-robber/' },
        { id: '42', title: 'House Robber II', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/house-robber-ii/' },
        { id: '43', title: 'Longest Palindromic Substring', difficulty: 'Medium', status: 'Unsolved', url: 'https://leetcode.com/problems/longest-palindromic-substring/' }
    ]}
];

const companies = [
    { id: 'google', name: 'Google', logo: 'ph-google-logo', desc: 'Search giant with rigorous 4-5 round technical focus.', rounds: ['Online Assessment', 'Technical 1 (DSA)', 'Technical 2 (System Design)', 'Googlyness (HR)'] },
    { id: 'amazon', name: 'Amazon', logo: 'ph-amazon-logo', desc: 'Heavy focus on 14 Leadership Principles.', rounds: ['OA (Debugging + Coding)', 'Technical 1', 'Technical 2', 'Bar Raiser (Behavioral)'] },
    { id: 'microsoft', name: 'Microsoft', logo: 'ph-microsoft-logo', desc: 'Standard DSA and CS fundamentals assessment.', rounds: ['Online Assessment', 'Technical 1', 'Technical 2', 'As Appropriate (AA)'] }
];

const prepModules = [
    { 
        id: 'aptitude', 
        title: 'Quantitative Aptitude', 
        desc: 'Essential notes for passing preliminary OA rounds.', 
        icon: 'ph-calculator',
        content: `
            <h4 style="margin-bottom:0.5rem; color:var(--accent-primary);">1. Time and Work</h4>
            <div style="margin-bottom: 1.5rem;" class="text-secondary">If A can do a piece of work in n days, then A's 1 day's work = 1/n. If A and B work together, their combined 1 day's work is (1/A + 1/B). <b>Shortcut:</b> If A takes x days and B takes y days, together they take (x*y)/(x+y) days.</div>
            
            <h4 style="margin-bottom:0.5rem; color:var(--accent-primary);">2. Probability & Permutations</h4>
            <div style="margin-bottom: 1.5rem;" class="text-secondary">Probability P(E) = (Favorable outcomes) / (Total outcomes). <br><b>Permutation (Arrangement):</b> nPr = n! / (n-r)! <br><b>Combination (Selection):</b> nCr = n! / [r! * (n-r)!]</div>
            
            <h4 style="margin-bottom:0.5rem; color:var(--accent-primary);">3. Speed, Time, and Distance</h4>
            <div style="margin-bottom: 1.5rem;" class="text-secondary">Distance = Speed × Time. <br><b>Relative Speed:</b> When two objects are moving in opposite directions at speeds u and v, relative speed is (u + v). In the same direction, relative speed is (u - v). <br><b>Train crossing platform:</b> Total distance = length of train + length of platform.</div>
        `
    },
    { 
        id: 'technical', 
        title: 'Computer Science Core', 
        desc: 'OS, DBMS, Computer Networks, and Object Oriented Programming.', 
        icon: 'ph-code-block',
        content: `
            <h4 style="margin-bottom:0.5rem; color:var(--accent-primary);">1. Operating Systems</h4>
            <ul style="margin-left: 20px; margin-bottom: 1.5rem;" class="text-secondary">
                <li><strong>Deadlock Coffman Conditions:</strong> Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.</li>
                <li><strong>Paging vs Segmentation:</strong> Paging divides memory into fixed-size blocks (pages). Segmentation divides memory into variable-size blocks based on logical units.</li>
                <li><strong>Thrashing:</strong> When a system spends more time paging than executing processes, leading to severe performance collapse.</li>
            </ul>
            <h4 style="margin-bottom:0.5rem; color:var(--accent-primary);">2. DBMS & SQL</h4>
            <ul style="margin-left: 20px; margin-bottom: 1.5rem;" class="text-secondary">
                <li><strong>ACID Properties:</strong> Atomicity, Consistency, Isolation, Durability.</li>
                <li><strong>Normalization:</strong> 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF.</li>
                <li><strong>Indexing:</strong> B-Trees and Hash Indexes speed up data retrieval by avoiding full table scans.</li>
            </ul>
        `
    },
    { 
        id: 'hr', 
        title: 'HR & Behavioral', 
        desc: 'The STAR Method framework and Top questions.', 
        icon: 'ph-users',
        content: `
            <h4 style="margin-bottom:0.5rem; color:var(--accent-primary);">The STAR Method</h4>
            <div class="text-secondary" style="margin-bottom: 0.5rem;">Use to structure your behavioral answers logically and clearly:</div>
            <ul style="margin-left: 20px; margin-bottom: 1.5rem;" class="text-secondary">
                <li><strong>Situation:</strong> Describe the background or context of the project or challenge.</li>
                <li><strong>Task:</strong> Describe the specific challenge or problem that needed to be solved.</li>
                <li><strong>Action:</strong> Explain the specific actions YOU (not the team) took to mitigate the problem.</li>
                <li><strong>Result:</strong> Share the positive outcome, quantifying with metrics where possible (e.g., "saved 20% processing time").</li>
            </ul>
            <h4 style="margin-bottom:0.5rem; color:var(--accent-primary);">Handling "Greatest Weakness"</h4>
            <div class="text-secondary" style="margin-bottom: 1.5rem;">Never say "I work too hard" or "I am a perfectionist." State a real technical or professional weakness (e.g., "I sometimes struggle with public speaking") and immediately follow up with actionable steps you are taking to fix it ("so I joined a local Toastmasters club").</div>
        `
    }
];

const app = {
    content: document.getElementById('main-content'),
    navLinks: document.querySelectorAll('.nav-item'),
    
    init() {
        window.addEventListener('hashchange', () => this.route());
        if (!window.location.hash) window.location.hash = '#home';
        else this.route();

        // Theme init
        const themeBtn = document.getElementById('theme-btn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.toggleTheme());
        }
        
        let savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    },

    toggleTheme() {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(newTheme);
    },

    updateThemeIcon(theme) {
        const icon = document.getElementById('theme-icon');
        if (!icon) return;
        icon.className = theme === 'light' ? 'ph ph-sun' : 'ph ph-moon';
    },

    authMode: 'login',

    openAuthModal(mode) {
        this.authMode = mode;
        this.updateAuthModalUI();
        document.getElementById('auth-overlay').classList.remove('hidden');
    },

    closeAuthModal() {
        document.getElementById('auth-overlay').classList.add('hidden');
    },

    switchAuthMode() {
        this.authMode = this.authMode === 'login' ? 'signup' : 'login';
        this.updateAuthModalUI();
    },

    updateAuthModalUI() {
        const isLogin = this.authMode === 'login';
        document.getElementById('auth-title').innerText = isLogin ? 'Welcome Back' : 'Create an Account';
        document.getElementById('auth-submit-btn').innerText = isLogin ? 'Log In' : 'Sign Up';
        document.getElementById('auth-switch-text').innerText = isLogin ? "Don't have an account?" : "Already have an account?";
        document.getElementById('auth-switch-link').innerText = isLogin ? 'Sign Up' : 'Log In';
        
        const nameField = document.getElementById('name-field-container');
        if (isLogin) nameField.classList.add('hidden');
        else nameField.classList.remove('hidden');
    },

    mockLogin() {
        // Change navbar to show user profile
        const authSection = document.getElementById('nav-auth-section');
        if (authSection) {
            authSection.innerHTML = `
                <button id="theme-btn" class="btn btn-outline" style="padding: 0.5rem; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;" onclick="app.toggleTheme()"><i class="ph ph-moon" id="theme-icon" style="font-size: 1.25rem;"></i></button>
                <div class="flex-row align-center gap-2" style="cursor: pointer; padding: 0.5rem 1rem; border-radius: 99px; background: rgba(128,128,128,0.1); border: 1px solid var(--border-color);">
                    <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--accent-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem;">AJ</div>
                    <span class="font-medium" style="font-size: 0.95rem;">Abhijit</span>
                </div>
            `;
            // Restore theme icon state
            this.updateThemeIcon(document.documentElement.getAttribute('data-theme'));
        }
        this.closeAuthModal();
    },

    route() {
        const hash = window.location.hash.substring(1) || 'home';
        
        // Update active nav
        this.navLinks.forEach(link => {
            if (link.dataset.link === hash) link.classList.add('active');
            else link.classList.remove('active');
        });

        // Trigger transition animation
        this.content.className = 'container page-enter';
        void this.content.offsetWidth; // Force reflow to restart animation

        switch(hash) {
            case 'home': this.renderHome(); break;
            case 'jobs': this.renderJobs(); break;
            case 'prep': this.renderPrep(); break;
            case 'dsa': this.renderDSA(); break;
            case 'companies': this.renderCompanies(); break;
            default: this.renderHome();
        }
    },

    renderHome() {
        this.content.innerHTML = `
            <!-- Hero Section -->
            <div class="hero-section text-center" style="position: relative; padding: 4rem 1rem 6rem; overflow: hidden; border-radius: 24px; margin-top: 1rem;">
                <!-- Glowing Orb Backgrounds -->
                <div style="position: absolute; top: -100px; left: -100px; width: 300px; height: 300px; background: var(--accent-primary); filter: blur(120px); opacity: 0.3; border-radius: 50%;"></div>
                <div style="position: absolute; bottom: -100px; right: -100px; width: 400px; height: 400px; background: #a855f7; filter: blur(150px); opacity: 0.2; border-radius: 50%;"></div>
                
                <div style="position: relative; z-index: 2;">
                    <div class="badge mb-4" style="display: inline-block; padding: 0.4rem 1rem; border: 1px solid rgba(99,102,241,0.3); background: rgba(99,102,241,0.1); color: var(--accent-primary); border-radius: 99px;">
                        <i class="ph ph-sparkle"></i> Elevate V2 is now live
                    </div>
                    <h1 style="font-size: 5rem; margin-bottom: 1.5rem; letter-spacing: -2px; line-height: 1.1;">Land Your Dream <br><span class="text-gradient">Tech Career</span></h1>
                    <p class="text-secondary mb-4" style="font-size: 1.25rem; max-width: 600px; margin: 0 auto; line-height: 1.6;">
                        The ultimate destination for discovering ultra-relevant jobs, mastering technical interview modules, and conquering dynamic DSA problem sets.
                    </p>
                    <div class="flex-row gap-3 justify-center mt-6" style="justify-content: center;">
                        <button class="btn btn-primary" onclick="window.location.hash='#jobs'" style="padding: 1rem 2.5rem; font-size: 1.1rem; border-radius: 12px; font-weight: 700;">
                            Explore Jobs <i class="ph ph-arrow-right"></i>
                        </button>
                        <button class="btn btn-outline glass" onclick="window.location.hash='#dsa'" style="padding: 1rem 2.5rem; font-size: 1.1rem; border-radius: 12px; font-weight: 600;">
                            Start DSA Practice
                        </button>
                    </div>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="flex-row space-between align-center glass-card mt-2 mb-6" style="padding: 2rem 4rem; flex-wrap: wrap; text-align: center; gap: 2rem; justify-content: space-evenly;">
                <div class="flex-col">
                    <h2 style="font-size: 2.5rem; color: var(--text-primary); margin-bottom: 0.5rem;">150+</h2>
                    <span class="text-secondary font-medium">Curated DSA Questions</span>
                </div>
                <div style="width: 1px; height: 60px; background: var(--border-color);" class="hidden-mobile"></div>
                <div class="flex-col">
                    <h2 style="font-size: 2.5rem; color: var(--text-primary); margin-bottom: 0.5rem;">50+</h2>
                    <span class="text-secondary font-medium">Top Tier Companies</span>
                </div>
                <div style="width: 1px; height: 60px; background: var(--border-color);" class="hidden-mobile"></div>
                <div class="flex-col">
                    <h2 style="font-size: 2.5rem; color: var(--text-primary); margin-bottom: 0.5rem;">3</h2>
                    <span class="text-secondary font-medium">Core Prep Modules</span>
                </div>
            </div>

            <!-- Features Section -->
            <div class="text-center mt-6 mb-4">
                <span style="color: var(--accent-primary); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem;">Platform Features</span>
                <h2 style="font-size: 2.5rem; margin-top: 0.5rem;">Everything you need to get hired.</h2>
            </div>
            
            <div class="grid grid-3" style="margin-bottom: 4rem;">
                <div class="glass-card text-center flex-col align-center" onclick="window.location.hash='#jobs'" style="cursor: pointer; padding: 3rem 2rem;">
                    <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2)); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; border: 1px solid rgba(99,102,241,0.3);">
                        <i class="ph ph-magnifying-glass" style="font-size: 2.5rem; color: var(--accent-primary);"></i>
                    </div>
                    <h3 class="mb-2" style="font-size: 1.5rem;">Curated Job Portal</h3>
                    <p class="text-secondary" style="line-height: 1.6;">Discover exclusive roles matching your skills, complete with expected salary bandwidths and direct apply links.</p>
                </div>
                
                <div class="glass-card text-center flex-col align-center" onclick="window.location.hash='#prep'" style="cursor: pointer; padding: 3rem 2rem;">
                    <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, rgba(16,185,129,0.2), rgba(52,211,153,0.2)); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; border: 1px solid rgba(16,185,129,0.3);">
                        <i class="ph ph-book-open" style="font-size: 2.5rem; color: var(--success);"></i>
                    </div>
                    <h3 class="mb-2" style="font-size: 1.5rem;">Preparation Hub</h3>
                    <p class="text-secondary" style="line-height: 1.6;">Expansive study materials covering aptitude shortcuts, technical core CS fundamentals, and behavioral HR answers.</p>
                </div>
                
                <div class="glass-card text-center flex-col align-center" onclick="window.location.hash='#dsa'" style="cursor: pointer; padding: 3rem 2rem;">
                    <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, rgba(245,158,11,0.2), rgba(251,191,36,0.2)); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; border: 1px solid rgba(245,158,11,0.3);">
                        <i class="ph ph-tree-structure" style="font-size: 2.5rem; color: var(--warning);"></i>
                    </div>
                    <h3 class="mb-2" style="font-size: 1.5rem;">Topic-wise DSA Tracker</h3>
                    <p class="text-secondary" style="line-height: 1.6;">Track your progress through the definitive 150+ Top Interview Questions directly linked to LeetCode.</p>
                </div>
            </div>
            
            <!-- Call to Action -->
            <div class="glass-card flex-col align-center justify-center text-center" style="padding: 4rem 2rem; border-radius: 24px; position: relative; overflow: hidden; border-color: rgba(99,102,241,0.3);">
                <div style="position: absolute; right: 0; bottom: 0; width: 300px; height: 300px; background: rgba(59,130,246,0.15); filter: blur(100px); border-radius: 50%;"></div>
                <h2 style="font-size: 3rem; margin-bottom: 1rem; position: relative; z-index: 2;">Ready to start?</h2>
                <p class="text-secondary max-w-2xl mb-4" style="font-size: 1.2rem; position: relative; z-index: 2;">Join thousands of engineers who landed their dream roles via Elevate.</p>
                <button class="btn btn-primary" onclick="app.openAuthModal('signup')" style="padding: 1rem 3rem; font-size: 1.25rem; border-radius: 12px; position: relative; z-index: 2; font-weight: bold;">Create Free Account</button>
            </div>
        `;
    },

    renderJobs() {
        const jobsHtml = jobs.map(j => `
            <div class="glass-card flex-col gap-2">
                <div class="flex-row space-between align-center">
                    <h3 class="text-lg">${j.title}</h3>
                    <span class="badge" style="background: rgba(16, 185, 129, 0.1); color: var(--success); border-color: rgba(16, 185, 129, 0.2);">${j.type}</span>
                </div>
                <div class="text-secondary font-medium flex-row align-center gap-1"><i class="ph ph-buildings"></i> ${j.company} &bull; <i class="ph ph-map-pin"></i> ${j.location}</div>
                <div style="font-weight: 700; color: var(--text-primary); font-size: 1.1rem;">${j.salary}</div>
                <div class="flex-row gap-1 mt-2">
                    ${j.tags.map(t => `<span class="badge" style="background: rgba(255,255,255,0.06); color: #e2e8f0; border:none">${t}</span>`).join('')}
                </div>
                <div class="flex-row space-between align-center mt-4" style="border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
                    <span class="text-sm"><i class="ph ph-clock"></i> ${j.posted}</span>
                    <button class="btn btn-primary" style="padding: 0.5rem 1.25rem;">Apply Now</button>
                </div>
            </div>
        `).join('');

        this.content.innerHTML = `
            <div class="flex-row space-between align-center mb-4">
                <h2>Job Opportunities</h2>
                <div style="width: 350px;">
                    <input type="text" class="search-input" placeholder="Search by role, skill, or company...">
                </div>
            </div>
            <div class="grid grid-2">
                ${jobsHtml}
            </div>
        `;
    },

    renderPrep() {
        const prepHtml = prepModules.map(p => `
            <div class="glass-card flex-col mb-4">
                <div class="flex-row align-center gap-2 mb-2">
                    <i class="${p.icon}" style="font-size: 2.5rem; color: var(--accent-primary);"></i>
                    <h3 style="font-size: 1.4rem;">${p.title}</h3>
                </div>
                <p class="text-secondary mb-4 format-text">${p.desc}</p>
                <div style="background: rgba(128,128,128,0.05); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); color: var(--text-primary); line-height: 1.6;">
                    ${p.content}
                </div>
            </div>
        `).join('');

        this.content.innerHTML = `
            <div class="mb-4">
                <h2>Preparation Hub</h2>
                <p class="text-secondary mt-2 text-lg">Real concepts and study materials mapped for MAANG interviews.</p>
            </div>
            ${prepHtml}
        `;
    },

    renderDSA() {
        const topicsHtml = dsaTopics.map(t => `
            <div class="glass-card mb-4" style="padding: 2rem;">
                <div class="flex-row space-between align-center mb-2">
                    <h3 style="font-size: 1.3rem;">${t.title}</h3>
                    <span style="color: var(--success); font-weight: 600;">${t.progress}%</span>
                </div>
                <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px; margin-bottom: 2rem;">
                    <div style="width: ${t.progress}%; height: 100%; background: linear-gradient(90deg, #10b981, #34d399); border-radius: 4px; box-shadow: 0 0 10px rgba(16,185,129,0.3);"></div>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border-color); color: var(--text-secondary);">
                            <th style="padding: 1rem 0; width: 60px; text-align: center;">Status</th>
                            <th style="padding: 1rem 1rem;">Problem Title</th>
                            <th style="padding: 1rem 0; width: 120px;">Difficulty</th>
                            <th style="padding: 1rem 0; width: 100px; text-align: right;">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${t.problems.map(p => `
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.03); transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.02)'" onmouseout="this.style.background='transparent'">
                                <td style="padding: 1rem 0; text-align: center;">
                                    ${p.status === 'Solved' ? '<i class="ph-fill ph-check-circle" style="color: var(--success); font-size: 1.5rem;"></i>' : '<i class="ph ph-circle" style="color: var(--text-secondary); font-size: 1.5rem;"></i>'}
                                </td>
                                <td style="padding: 1rem 1rem; font-weight: 500; font-size: 1.1rem; color: ${p.status === 'Solved' ? 'var(--text-secondary)' : 'var(--text-primary)'};">${p.title}</td>
                                <td style="padding: 1rem 0;">
                                    <span style="color: ${p.difficulty==='Easy'?'var(--success)':p.difficulty==='Medium'?'var(--warning)':'var(--danger)'}; font-weight: 500;">
                                        ${p.difficulty}
                                    </span>
                                </td>
                                <td style="padding: 1rem 0; text-align:right;">
                                    <a href="${p.url}" target="_blank" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.9rem; text-decoration: none;">Solve <i class="ph ph-arrow-up-right"></i></a>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `).join('');

        this.content.innerHTML = `
            <div class="flex-row space-between align-center mb-4">
                <div>
                    <h2>DSA Tracker</h2>
                    <p class="text-secondary mt-1">Structured 450+ curated topic-wise questions to test your algorithms.</p>
                </div>
                <div class="glass-card" style="padding: 1rem 1.5rem; text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-primary);">4 / 450</div>
                    <div class="text-secondary text-sm">Problems Solved</div>
                </div>
            </div>
            ${topicsHtml}
        `;
    },

    renderCompanies() {
        const compHtml = companies.map(c => `
            <div class="glass-card flex-col h-full space-between">
                <div>
                    <h3 class="flex-row align-center gap-2 mb-2" style="font-size: 1.5rem;">
                        <i class="ph-fill ${c.logo}" style="color: var(--accent-primary); font-size: 2rem;"></i> ${c.name}
                    </h3>
                    <p class="text-secondary mb-4">${c.desc}</p>
                    <div class="text-sm mb-2" style="font-weight: 600; color: var(--text-primary); text-transform: uppercase; letter-spacing: 1px;">Interview Rounds</div>
                    <ul style="list-style: none; padding-left: 0; color: var(--text-secondary); margin-bottom: 2rem;">
                        ${c.rounds.map((r, i) => `<li style="margin-bottom: 0.75rem; padding-left: 2rem; position: relative;">
                            <span style="position: absolute; left:0; width: 1.5rem; height: 1.5rem; background: rgba(99,102,241,0.1); color: var(--accent-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold;">${i+1}</span> 
                            ${r}
                        </li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-primary w-full mt-auto">View Full Syllabus Detail</button>
            </div>
        `).join('');

        this.content.innerHTML = `
            <div class="mb-4">
                <h2>Company-wise Hiring Processes</h2>
                <p class="text-secondary mt-2 text-lg">Know exactly what top-tier MAANG companies expect right from OA to HR.</p>
            </div>
            <div class="grid grid-3" style="align-items: stretch;">
                ${compHtml}
            </div>
        `;
    }
};

// Expose app globally for inline event handlers and initialize
window.app = app;
document.addEventListener('DOMContentLoaded', () => app.init());
