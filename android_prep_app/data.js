// Android Lead/Staff Interview Preparation Dataset
// Grounded on Naukri Research for 10-11 Years Experience Profile

const APP_DATA = {
  candidate: {
    experience: "10-11 Years",
    targetRoles: "Senior Android Developer / Android Tech Lead / Staff Engineer",
    locations: "Remote & Chennai",
    googleSheetUrl: "https://docs.google.com/spreadsheets/d/1YkA9gZH8PYWQV1GyPNQLYX9Eh6oAXiYPw1uWs2oLaDw/edit"
  },

  companies: [
    {
      id: "atlassian",
      name: "Atlassian",
      role: "Senior Mobile Android Engineer",
      seniority: "L5 / Staff Track",
      location: "Remote (India)",
      workMode: "100% Remote",
      compensation: "Top-Tier Product Standard",
      priority: "High",
      tags: ["Tier-1 Product", "Monorepo", "High Scale", "Offline-First"],
      rounds: [
        { name: "Round 1", type: "Live Coding / Android DSA", desc: "Data structures, custom Compose UI state, Coroutine scheduling under pressure." },
        { name: "Round 2", type: "Mobile System Design (HLD)", desc: "Offline-first Jira sync, optimistic UI updates, conflict resolution." },
        { name: "Round 3", type: "Architecture & Code Craft (LLD)", desc: "Multi-module architecture, custom component library, automated testing (Turbine/Robolectric)." },
        { name: "Round 4", type: "Values & Engineering Leadership", desc: "Open company, cross-team alignment, mentoring senior developers." }
      ],
      systemDesign: "Design an offline-first issue tracker (Jira mobile) with optimistic UI updates, delta sync, and collaborative conflict resolution.",
      internals: "Kotlin compiler intrinsics, inline value classes, SupervisorJob vs Job, Compose stability (@Stable, derivedStateOf), memory profiling with LeakCanary."
    },
    {
      id: "tcs",
      name: "Tata Consultancy Services (TCS)",
      role: "Android - Kotlin Compose Tech Lead",
      seniority: "Tech Lead / Mobile Architect",
      location: "Chennai",
      workMode: "Hybrid / Onsite",
      compensation: "Competitive Enterprise",
      priority: "High",
      tags: ["Modernization", "Compose Migration", "Clean Architecture", "Tech Leadership"],
      rounds: [
        { name: "Round 1", type: "Technical Deep-Dive", desc: "Kotlin mechanics, Compose lifecycle, state hoisting, Coroutines Flow." },
        { name: "Round 2", type: "Architecture & Clean Code", desc: "MVVM vs MVI, multi-module dependency graphs, dynamic feature delivery." },
        { name: "Round 3", type: "Tech Leadership & Governance", desc: "Migration roadmap from XML to Compose, CI/CD pipeline automation." },
        { name: "Round 4", type: "Managerial / Client Fitment", desc: "Client communications, team mentoring, sprint planning." }
      ],
      systemDesign: "Design a zero-downtime, phased migration strategy from legacy XML/Java to Jetpack Compose for a 10M+ user enterprise banking app.",
      internals: "Process death handling (SavedStateHandle), ViewModel lifecycles across config changes, recomposition traps (unstable lambdas), ART compilation."
    },
    {
      id: "daksh-mnc",
      name: "Global MNC (via Daksh)",
      role: "Senior Android Developer / Lead",
      seniority: "Lead Engineer",
      location: "Chennai (Hybrid)",
      workMode: "Hybrid",
      compensation: "₹25.0 - 32.5 Lacs PA",
      priority: "High",
      tags: ["Fintech Security", "High Compensation", "OWASP", "Room & SQLCipher"],
      rounds: [
        { name: "Round 1", type: "Machine Coding (90 mins)", desc: "Build a production-quality multi-screen reactive app with Clean Architecture." },
        { name: "Round 2", type: "System Design & App Security", desc: "Biometric auth, token refresh, SSL pinning, encrypted caching." },
        { name: "Round 3", type: "Concurrency & Thread Safety", desc: "Thread deadlocks, race conditions, atomic variables vs Mutex in Coroutines." },
        { name: "Round 4", type: "Techno-Managerial", desc: "Architecture defense, sprint governance, regulatory compliance." }
      ],
      systemDesign: "Design a high-security mobile banking/investment client with two-factor biometric authentication, local encrypted SQLCipher database, and certificate pinning.",
      internals: "OWASP Mobile Top 10, Android Keystore API, SSL Pinning, thread deadlocks, Mutex vs Atomic variables in Coroutines, Proguard/R8 obfuscation."
    },
    {
      id: "worktual",
      name: "Worktual Innovations",
      role: "Mobile App Developer / Lead Engineer",
      seniority: "VoIP & Media Lead",
      location: "Chennai (Ekkaduthangal)",
      workMode: "In-Office / Hybrid",
      compensation: "₹22.5 - 25.0 Lacs PA",
      priority: "High",
      tags: ["WebRTC", "VoIP / SIP", "Real-Time Streaming", "Low Latency"],
      rounds: [
        { name: "Round 1", type: "Core Android & Concurrency", desc: "Background processing, thread pools, channel buffers, low-latency queues." },
        { name: "Round 2", type: "WebRTC & Audio Protocols", desc: "SIP signaling, SDP exchange, ICE candidates, jitter buffer management." },
        { name: "Round 3", type: "Calling Subsystem System Design", desc: "TelecomManager / ConnectionService, background incoming call handling." },
        { name: "Round 4", type: "Technical Fitment", desc: "Experience with native C++/JNI media libraries, crash debugging." }
      ],
      systemDesign: "Design an audio-video calling & conference subsystem that seamlessly transitions active calls between WiFi and 4G/5G without audio drops.",
      internals: "Android 14/15 Foreground Service types (MICROPHONE, MEDIA_PLAYBACK), Doze mode exemptions, high-priority FCM data messages, AudioRecord/AudioTrack."
    },
    {
      id: "photon",
      name: "Photon",
      role: "Senior Android Developer / Tech Lead",
      seniority: "Tech Lead",
      location: "Chennai",
      workMode: "Hybrid",
      compensation: "Competitive",
      priority: "Medium-High",
      tags: ["Retail eCommerce", "Omnichannel", "GraphQL", "Baseline Profiles"],
      rounds: [
        { name: "Round 1", type: "DS & Algo Problem Solving", desc: "LeetCode Medium arrays, trees, dynamic programming, sliding window." },
        { name: "Round 2", type: "UI & State Coding", desc: "Complex Compose animations, nested scroll connections, custom layouts." },
        { name: "Round 3", type: "High-Traffic System Design", desc: "eCommerce catalogue with infinite pagination, multi-level image caching." },
        { name: "Round 4", type: "Client & Agile Leadership", desc: "Stakeholder management, sprint velocity, cross-platform alignment." }
      ],
      systemDesign: "Design a high-scale retail eCommerce catalogue with infinite scroll pagination, multi-tier disk & memory image caching, and offline cart persistence.",
      internals: "Launch modes (singleTop, singleTask), task affinities, Baseline Profiles for startup time optimization, ART JIT vs AOT execution."
    },
    {
      id: "swits",
      name: "Swits Digital",
      role: "Android Kotlin Professional / Lead",
      seniority: "Cross-Platform Lead",
      location: "Chennai",
      workMode: "Chennai",
      compensation: "Competitive",
      priority: "Medium-High",
      tags: ["Kotlin Multiplatform", "KMP", "Ktor", "Shared Architecture"],
      rounds: [
        { name: "Round 1", type: "Kotlin Deep-Dive", desc: "Functional idioms, coroutines flow operators, generics invariance/variance." },
        { name: "Round 2", type: "KMP & Native Interop", desc: "expect/actual declarations, Objective-C/Swift export limitations, Ktor." },
        { name: "Round 3", type: "Cross-Platform System Design", desc: "Shared repository and domain model with native Compose/SwiftUI UI." },
        { name: "Round 4", type: "Engineering Leadership", desc: "Guiding native teams through KMP adoption, continuous delivery." }
      ],
      systemDesign: "Design a Kotlin Multiplatform (KMP) shared networking and local caching architecture consumed by native Jetpack Compose (Android) and SwiftUI (iOS).",
      internals: "KMP new memory manager, freezing semantics (historical vs current), Swift async/await bridging from Coroutines StateFlow."
    },
    {
      id: "appmysite",
      name: "Appmysite",
      role: "Lead Android Developer",
      seniority: "Principal Platform Architect",
      location: "Remote",
      workMode: "100% Remote",
      compensation: "Competitive",
      priority: "Medium",
      tags: ["Platform SDK", "Dynamic Code", "Gradle Plugins", "White-Label"],
      rounds: [
        { name: "Round 1", type: "Platform SDK Architecture", desc: "Modularization, dynamic loading, schema-driven UI parser." },
        { name: "Round 2", type: "Build Tools & Custom Gradle", desc: "Writing Gradle plugins, bytecode manipulation, Proguard/R8 optimization." },
        { name: "Round 3", type: "Platform Scalability", desc: "Automated multi-tenant packaging, Play Store API automation." },
        { name: "Round 4", type: "Executive Fitment", desc: "Architecture roadmap, developer platform DX, release reliability." }
      ],
      systemDesign: "Design a dynamic schema-driven UI engine that parses arbitrary backend JSON UI models into high-performance native Jetpack Compose layouts.",
      internals: "Play Feature Delivery API, dynamic feature module classloaders, APK size reduction, Proguard keep rules, bytecode shrinking."
    },
    {
      id: "vinove",
      name: "Vinove Software",
      role: "Lead Android Developer / Specialist",
      seniority: "10-15 Yrs Veteran",
      location: "Chennai",
      workMode: "Chennai",
      compensation: "Competitive",
      priority: "Medium",
      tags: ["Legacy Modernization", "WorkManager", "Technical Governance"],
      rounds: [
        { name: "Round 1", type: "Senior Core Android Fundamentals", desc: "Lifecycles, services vs workers, process isolation, IPC." },
        { name: "Round 2", type: "Architecture & Code Review", desc: "Reviewing pull requests, identifying architectural violations." },
        { name: "Round 3", type: "Legacy Code Refactoring", desc: "Incremental modularization of massive monolithic activities." },
        { name: "Round 4", type: "Stakeholder Management", desc: "Technical debt justification, enterprise SLAs." }
      ],
      systemDesign: "Design an enterprise field-service tracking app with background geo-location tracking and offline database synchronization.",
      internals: "Java/Kotlin interop (@JvmOverloads, nullability), WorkManager periodic tasks vs Doze mode, memory leak debugging in production."
    },
    {
      id: "neoveda",
      name: "Neoveda Technologies",
      role: "Senior Kotlin (Android) Developer",
      seniority: "IoT & Hardware Lead",
      location: "Chennai",
      workMode: "Chennai",
      compensation: "Competitive",
      priority: "Medium",
      tags: ["Bluetooth LE", "IoT Hardware", "Serial Protocols", "State Machines"],
      rounds: [
        { name: "Round 1", type: "Kotlin & Concurrency", desc: "Coroutines channels, actor patterns, thread-safe state machines." },
        { name: "Round 2", type: "Hardware Protocols (BLE/USB)", desc: "GATT client lifecycle, MTU negotiation, packet buffering." },
        { name: "Round 3", type: "IoT Mobile System Design", desc: "Reliable telemetry logging with SQLite queuing & cloud upload." },
        { name: "Round 4", type: "Technical Leadership", desc: "Handling hardware firmware discrepancies, team guidance." }
      ],
      systemDesign: "Design an IoT gateway mobile application maintaining persistent BLE links with multiple medical/industrial sensors simultaneously.",
      internals: "BLE GATT client/server lifecycle, MTU negotiation, notification vs indication packets, Android 12+ runtime nearby device permissions."
    },
    {
      id: "xpetize",
      name: "Xpetize Technology Solutions",
      role: "Senior Android Developer",
      seniority: "Senior Remote Engineer",
      location: "Remote",
      workMode: "100% Remote",
      compensation: "₹10.0 - 16.0 Lacs PA",
      priority: "Medium",
      tags: ["IoT Cloud", "RESTful APIs", "Security Keystore", "CI/CD"],
      rounds: [
        { name: "Round 1", type: "Core Kotlin & Problem Solving", desc: "Data modeling, Flow operators, error handling strategies." },
        { name: "Round 2", type: "API Integration & Security", desc: "OAuth token refresh, interceptors, Android Keystore encryption." },
        { name: "Round 3", type: "Architecture Assignment Review", desc: "Walkthrough of submitted take-home project, test coverage." },
        { name: "Round 4", type: "Cultural Alignment", desc: "Remote collaboration, async communication, self-direction." }
      ],
      systemDesign: "Design an IoT smart-device management dashboard with real-time telemetry updates and remote command dispatch.",
      internals: "Android Keystore cryptographic keys, biometric prompt API, exponential backoff network retry policies, SSL pinning."
    },
    {
      id: "bounteous",
      name: "Bounteous",
      role: "Lead Android Engineer",
      seniority: "Lead Engineer / Architect",
      location: "Chennai (Hybrid)",
      workMode: "Hybrid",
      compensation: "₹20.0 - 35.0 Lacs PA",
      priority: "High",
      tags: ["Design Systems", "Component Library", "Compose", "Enterprise DX"],
      rounds: [
        { name: "Round 1", type: "Live Coding & Advanced Kotlin", desc: "Coroutines Flow backpressure, custom Compose state hoisting, algorithmic data modeling." },
        { name: "Round 2", type: "UI Architecture & Design Systems", desc: "Building scalable atomic UI components, SubcomposeLayout, dynamic theming tokens." },
        { name: "Round 3", type: "Mobile System Design (HLD)", desc: "Multi-tenant white-label mobile app with server-driven layout composition." },
        { name: "Round 4", type: "Leadership & Delivery Governance", desc: "Cross-team API contracts, accessibility compliance (WCAG), code review mentorship." }
      ],
      systemDesign: "Design a scalable White-Label Design System and multi-tenant Android application with dynamic remote theming, accessible components, and modular build flavors.",
      internals: "Compose SubcomposeLayout performance penalties, measure/layout constraints, @Immutable vs @Stable contract invariants, Fastlane release automation."
    },
    {
      id: "tata-elxsi",
      name: "Tata Elxsi",
      role: "Android Tech Lead - Media & OTT Platforms",
      seniority: "Tech Lead / Media Specialist",
      location: "Chennai",
      workMode: "Hybrid / Onsite",
      compensation: "Enterprise Competitive",
      priority: "High",
      tags: ["ExoPlayer", "Media3", "DRM / Widevine", "HLS / DASH", "Video Streaming"],
      rounds: [
        { name: "Round 1", type: "Core Android & Multithreading", desc: "Thread pools, memory management, JNI/NDK media interop, IPC with MediaBrowserService." },
        { name: "Round 2", type: "Media Frameworks & Player SDK", desc: "ExoPlayer / Media3 architecture, DRM Widevine modular setup, HLS/DASH chunked streaming." },
        { name: "Round 3", type: "Video Streaming System Design", desc: "High-scale OTT streaming client with adaptive bitrate (ABR), offline encrypted downloads, and PIP." },
        { name: "Round 4", type: "Technical Leadership & Client Fitment", desc: "Architecture roadmap defense, OEM device fragmentation, SLA benchmarking (startup latency)." }
      ],
      systemDesign: "Design an enterprise OTT Media Player SDK (Media3 / ExoPlayer) supporting adaptive bitrate streaming, DRM Widevine license renewal, offline download sync, and Picture-in-Picture (PiP).",
      internals: "SurfaceView vs TextureView rendering pipeline, MediaCodec hardware decoder limits, VMAF / buffer health tuning, Android TV D-Pad focus navigation."
    },
    {
      id: "paypal",
      name: "PayPal",
      role: "Staff Software Engineer - Android (Mobile Platform)",
      seniority: "Staff / Principal Track",
      location: "Chennai",
      workMode: "Hybrid (Chennai)",
      compensation: "₹35.0 - 50.0+ Lacs PA",
      priority: "Top Priority",
      tags: ["Staff Track", "Fintech Security", "Payment SDK", "Hardware Keystore", "High Concurrency"],
      rounds: [
        { name: "Round 1", type: "High-Concurrency Problem Solving", desc: "Thread safety, atomic primitives vs Mutex, reactive state reduction, lock-free queues." },
        { name: "Round 2", type: "Android Internals & Mobile Security", desc: "Hardware-backed KeyStore (StrongBox), BiometricPrompt crypto-object, certificate pinning, anti-tampering." },
        { name: "Round 3", type: "Global Mobile System Design", desc: "Global Payment Checkout SDK: idempotency, network failure recovery, offline payment queue, PCI-DSS compliance." },
        { name: "Round 4", type: "Staff Leadership & Architectural Defense", desc: "Cross-business unit SDK adoption, developer experience (DX), defining org-wide mobile reliability SLAs." }
      ],
      systemDesign: "Design an idempotent, high-security Mobile Payment Checkout SDK featuring biometric authentication, hardware-backed crypto verification, automated network retry queues, and zero-trust telemetry.",
      internals: "Android StrongBox Keymaster, BiometricPrompt with Cipher initialization, OkHttp CertificatePinner dynamic rotation, R8/Proguard code obfuscation, thread-safe Mutex locks."
    },
    {
      id: "hcltech",
      name: "HCLTech",
      role: "Senior Android Technical Lead / Architect",
      seniority: "Technical Lead / Architect",
      location: "Chennai",
      workMode: "Hybrid / Onsite",
      compensation: "₹22.0 - 28.0 Lacs PA",
      priority: "Medium-High",
      tags: ["Enterprise Modernization", "Clean Architecture", "CI/CD Automation", "Multi-Module"],
      rounds: [
        { name: "Round 1", type: "Android SDK & Jetpack Deep Dive", desc: "Coroutines Flow operators, Room SQLite indexes, WorkManager constraints, SavedStateHandle." },
        { name: "Round 2", type: "Architecture & Code Review Simulation", desc: "Refactoring monolithic legacy apps to Clean Architecture / MVI, static analysis (Detekt/Lint)." },
        { name: "Round 3", type: "Enterprise System Design", desc: "Offline-first field operations app with geofencing, background synchronization, and enterprise single sign-on (SSO)." },
        { name: "Round 4", type: "Technical Delivery Management", desc: "Offshore/onshore team governance, estimation, technical risk mitigation, client architectural alignment." }
      ],
      systemDesign: "Design an enterprise-grade Field Operations & Asset Inspection app supporting offline-first SQLite sync, periodic WorkManager sync, geofencing, and automated crash diagnostics.",
      internals: "Dynamic feature module classloaders, Proguard mapping deobfuscation, Baseline Profiles execution on ART, memory leak profiling with LeakCanary."
    }
  ],

  codingChallenges: [
    {
      id: "challenge-1",
      title: "Concurrent Token Refresh with Coroutines Mutex",
      company: "Atlassian & Global MNC (Daksh)",
      difficulty: "Hard (Lead Level)",
      category: "Concurrency & Networking",
      summary: "Implement a thread-safe Authenticator that prevents multiple simultaneous 401 refresh token API calls.",
      problemDesc: `In high-concurrency Android applications with multiple simultaneous network requests, a 401 Unauthorized response from multiple endpoints can trigger a 'thundering herd' of refresh token requests.
      
Your task is to implement a thread-safe \`TokenManager\` using Kotlin Coroutines \`Mutex\`. If 5 requests fail with 401 at the same time:
1. Exactly ONE network call to \`refreshTokens()\` must be executed.
2. The other 4 callers must suspend and wait for that refresh to complete.
3. Once refreshed, all 5 requests retry with the new token.
4. If the refresh fails, all pending callers must receive the failure exception and be logged out.`,
      starterCode: `class TokenManager(
    private val authApi: AuthApi,
    private val tokenStorage: TokenStorage
) {
    // TODO: Define concurrency primitives (Mutex, cached token)
    
    suspend fun getValidToken(): String {
        // Implement thread-safe token retrieval and single-flight refresh
        return ""
    }
    
    suspend fun handleUnauthorized(): String {
        // Implement concurrent refresh handling
        return ""
    }
}`,
      solutionCode: `import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock

class TokenManager(
    private val authApi: AuthApi,
    private val tokenStorage: TokenStorage
) {
    private val refreshMutex = Mutex()
    
    suspend fun getValidToken(): String {
        val currentToken = tokenStorage.getToken()
        if (currentToken != null && !isTokenExpired(currentToken)) {
            return currentToken
        }
        return refreshTokenSynchronized()
    }

    suspend fun handleUnauthorized(): String {
        return refreshTokenSynchronized()
    }

    private suspend fun refreshTokenSynchronized(): String {
        // Double-check locking pattern with Coroutine Mutex
        return refreshMutex.withLock {
            val freshToken = tokenStorage.getToken()
            // Check if another coroutine already refreshed it while we were waiting
            if (freshToken != null && !isTokenExpired(freshToken)) {
                return freshToken
            }
            
            // Execute the single network refresh
            val newTokens = authApi.refreshToken(tokenStorage.getRefreshToken())
            tokenStorage.saveTokens(newTokens.accessToken, newTokens.refreshToken)
            newTokens.accessToken
        }
    }

    private fun isTokenExpired(token: String): Boolean {
        // JWT expiration or timestamp validation
        return false 
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **Double-Checked Locking with Non-Blocking Mutex:** Coroutines \`Mutex.withLock\` guarantees that only one coroutine enters the critical section at a time. Once acquired, the fast-path check (\`!isTokenExpired\`) immediately returns the fresh token for the other waiting callers without making redundant network requests.
- **Structured Concurrency Suspension:** Unlike Java's \`synchronized\` or \`ReentrantLock\`, Coroutines \`Mutex\` suspends the coroutine rather than blocking the underlying OS thread, preventing thread pool exhaustion on \`Dispatchers.IO\`.
- **Atomic Storage Updates:** Token storage updates both \`accessToken\` and \`refreshToken\` atomically inside the lock before releasing the mutex.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **Lock Starvation & Network Timeouts:** If the auth server hangs indefinitely without responding, any coroutine holding the \`Mutex\` blocks all other network requests across the entire application. **Mandatory in Production:** Always wrap \`authApi.refreshToken()\` with \`withTimeoutOrNull(15_000L)\` to bound lock duration.
- **Cancellation Propagation:** If the coroutine currently executing the refresh is cancelled (e.g. user navigates away and parent ViewModel scope cancels), \`withLock\` safely releases the lock in its \`finally\` block, but other waiting coroutines must be able to retry rather than receiving an unhandled CancellationException.
- **Multiple Authenticator Interceptors:** OkHttp \`Authenticator\` callbacks execute on OkHttp dispatch threads. Failing to synchronize across interceptor instances can cause concurrent 401 refresh storms.

### 🎯 Senior & Staff Interview Evaluation Focus
- **"Why Mutex instead of synchronized or AtomicReference?"** -> \`synchronized\` blocks the underlying OS thread, causing thread pool starvation on Android. \`Mutex\` is cooperative and non-blocking.
- **"How do you handle a Refresh Token that has itself expired?"** -> Must detect HTTP 401/403 on the refresh endpoint itself, clear local Keystore credentials, emit an unauthenticated session event, and redirect to the Login screen.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **Proactive vs Reactive Refresh:** Combining proactive refresh (refreshing when token has <60s remaining) with reactive Mutex refresh on 401 eliminates 99% of 401 errors before they occur.
- **Process Death:** If Android kills the app process while tokens are in-flight, Room/EncryptedSharedPreferences maintains the last durable session state on cold restart.`,
      testCases: [
        { name: "Single caller gets token", input: "1 request with expired token", expected: "1 refresh call executed" },
        { name: "5 simultaneous 401 errors", input: "5 concurrent callers", expected: "Exactly 1 refresh call, 5 callers receive new token" },
        { name: "Failed refresh triggers logout", input: "Refresh API returns 403", expected: "Throws AuthException and clears storage" }
      ]
    },
    {
      id: "challenge-2",
      title: "Optimizing Compose Recomposition & State Stability",
      company: "TCS & Atlassian",
      difficulty: "Medium-Hard",
      category: "Jetpack Compose Internals",
      summary: "Refactor an unstable Jetpack Compose screen that is experiencing severe dropped frames and recomposition churn.",
      problemDesc: `You are reviewing a Pull Request for an Android Compose app with an infinite scrolling feed. The UI drops frames because the \`UserFeedItem\` composable is recomposing every single time the user scrolls, even when its data has not changed.

The developer wrote:
\`\`\`kotlin
data class FeedItem(
    val id: String,
    val title: String,
    val tags: List<String> // Unstable! List is an interface
)

@Composable
fun FeedList(items: List<FeedItem>, onBookmark: (String) -> Unit) {
    LazyColumn {
        items(items) { item ->
            // Recomposing continuously on scroll!
            UserFeedItem(item = item, onClick = { onBookmark(item.id) })
        }
    }
}
\`\`\`

Refactor this to achieve **100% stable parameters and zero redundant recompositions**.`,
      starterCode: `// Refactor FeedItem and UserFeedItem for Compose Compiler stability

data class FeedItem(
    val id: String,
    val title: String,
    val tags: List<String>
)

@Composable
fun FeedList(
    items: List<FeedItem>,
    onBookmark: (String) -> Unit
) {
    // TODO: Optimize lambdas, keys, and stability
}`,
      solutionCode: `import androidx.compose.runtime.Immutable
import androidx.compose.runtime.remember
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.toImmutableList

// 1. Mark model as Immutable or use kotlinx.collections.immutable
@Immutable
data class FeedItem(
    val id: String,
    val title: String,
    val tags: ImmutableList<String>
)

@Composable
fun FeedList(
    items: ImmutableList<FeedItem>,
    onBookmark: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    LazyColumn(modifier = modifier) {
        items(
            items = items,
            // 2. Always supply an explicit unique key for Lazy layouts
            key = { item -> item.id },
            contentType = { "feed_item" }
        ) { item ->
            // 3. Prevent lambda allocation on every recomposition with remember
            val onClick = remember(item.id, onBookmark) {
                { onBookmark(item.id) }
            }
            UserFeedItem(
                item = item,
                onClick = onClick
            )
        }
    }
}

@Composable
fun UserFeedItem(
    item: FeedItem,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    // Pure skippable composable
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **Compose Compiler Stability Model:** The Compose compiler assigns stability metrics to every composable parameter (\`@Stable\`, \`@Immutable\`, or Unstable). A composable is **Skippable** only if all its parameters are stable.
- **ImmutableList vs List<T> Interface:** In Kotlin, \`List<T>\` is an interface. Because implementations like \`ArrayList\` are mutable, the Compose compiler pessimistically flags \`List<T>\` as **Unstable**. Using \`ImmutableList<T>\` from \`kotlinx.collections.immutable\` or annotating the model with \`@Immutable\` guarantees stability.
- **Stable Lambda References:** Passing an inline lambda like \`onClick = { onBookmark(item.id) }\` generates a new anonymous function instance on every parent recomposition. Wrapping it in \`remember(item.id, onBookmark)\` keeps the function reference identical across recompositions.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **LazyColumn Index Shifts without Explicit Keys:** Without \`key = { item.id }\`, inserting a new item at position 0 causes Compose to recompose every single visible list item because their positional indices have changed.
- **Reading State Too Early in the Composition Phase:** If you read frequently changing state (like scroll offset in pixels) during composition, the entire Composable recomposes on every single pixel scrolled! Defer state reads to the Layout or Draw phase using lambda modifiers like \`Modifier.offset { IntOffset(x, y) }\`.
- **DerivedStateOf Usage:** Use \`derivedStateOf\` when state updates frequently but the UI only cares about a threshold condition (e.g. \`val showScrollToTop by remember { derivedStateOf { listState.firstVisibleItemIndex > 5 } }\`).

### 🎯 Senior & Staff Interview Evaluation Focus
- **"How do you diagnose recomposition churn in production?"** -> Inspect layout with Android Studio Layout Inspector (Recomposition Counts and Skips columns), and enable Compose Compiler Metrics (\`-Pplugin:androidx.compose.compiler.plugins.kotlin:reportsDestination=...\`).
- **"What makes a class Unstable in Compose?"** -> Any class defined in an external module not processed by the Compose compiler, any class with \`var\` properties, or any class containing fields with collection interfaces like \`List\`, \`Map\`, or \`Set\`.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **Recomposition vs Relayout:** Moving calculations into Draw/Layout phases skips Composition entirely, bringing frame render times from >25ms (dropped frames) down to <4ms (smooth 120Hz scrolling).`,
      testCases: [
        { name: "Item stability check", input: "FeedItem instance", expected: "Compose Compiler marks as @Immutable / Skippable" },
        { name: "Scroll recomposition", input: "Scroll LazyColumn by 500px", expected: "Zero recompositions for existing visible items" }
      ]
    },
    {
      id: "challenge-3",
      title: "Offline-First Sync Repository with Kotlin Flow",
      company: "Atlassian & Photon",
      difficulty: "Hard",
      category: "Architecture & Reactive Data",
      summary: "Build an offline-first repository that emits cached Room data immediately while performing a background network fetch.",
      problemDesc: `Design a production-grade \`SyncableRepository\` following the Single Source of Truth (SSOT) pattern:
1. Emit local SQLite (Room) data immediately to the UI layer.
2. Trigger an asynchronous network sync in the background.
3. If network succeeds, write into Room (which automatically emits the fresh data downstream).
4. If network fails with a network exception, emit the error state or fallback gracefully without blowing up the local cache stream.
5. Support pull-to-refresh forced invalidation.`,
      starterCode: `interface LocalDataSource<T> {
    fun observeAll(): Flow<List<T>>
    suspend fun insertAll(items: List<T>)
}

interface RemoteDataSource<T> {
    suspend fun fetchAll(): List<T>
}

class OfflineFirstRepository<T>(
    private val local: LocalDataSource<T>,
    private val remote: RemoteDataSource<T>
) {
    fun getStream(forceRefresh: Boolean = false): Flow<Resource<List<T>>> {
        // TODO: Implement reactive offline-first sync pipeline
        return emptyFlow()
    }
}`,
      solutionCode: `import kotlinx.coroutines.flow.*

sealed interface Resource<out T> {
    data class Success<T>(val data: T) : Resource<T>
    data class Loading<T>(val cachedData: T? = null) : Resource<T>
    data class Error<T>(val throwable: Throwable, val cachedData: T? = null) : Resource<T>
}

class OfflineFirstRepository<T>(
    private val local: LocalDataSource<T>,
    private val remote: RemoteDataSource<T>
) {
    fun getStream(forceRefresh: Boolean = false): Flow<Resource<List<T>>> = flow {
        // 1. Emit loading with current local cache
        val initialCache = local.observeAll().firstOrNull() ?: emptyList()
        emit(Resource.Loading(initialCache))

        // 2. Try fetching from network and updating cache
        try {
            val remoteData = remote.fetchAll()
            local.insertAll(remoteData)
        } catch (e: Exception) {
            emit(Resource.Error(e, initialCache))
        }

        // 3. Continually emit all updates from database (Single Source of Truth)
        emitAll(
            local.observeAll().map { Resource.Success(it) }
        )
    }.flowOn(Dispatchers.IO)
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **Single Source of Truth (SSOT):** The UI layer never reads raw network responses directly. Network payloads are parsed and persisted into SQLite (Room), and the UI observes the database query via \`emitAll(local.observeAll())\`.
- **Reactive Cache-First Pipeline:** \`flow { ... }\` immediately emits \`Resource.Loading(cachedData)\` so the user sees local cached data in 0ms, while background sync fetches fresh data asynchronously.
- **Failure Tolerance Without Stream Disruption:** When network requests fail with an exception, emitting \`Resource.Error(e, cachedData)\` informs the user of connectivity issues while preserving their view of the existing offline cache.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **Cold Flow Multiplexing:** \`getStream()\` is a cold Flow. If 3 separate UI components (e.g. Header, Feed list, Widget) collect \`getStream()\`, it triggers 3 separate network synchronization calls! Convert to a hot StateFlow in the ViewModel using \`.stateIn(scope, SharingStarted.WhileSubscribed(5000), initial)\`.
- **Missing flowOn(Dispatchers.IO):** SQLite reads/writes and JSON deserialization will cause UI freeze/ANR if executed on the Main dispatcher. Ensure \`flowOn(Dispatchers.IO)\` encapsulates the entire repository pipeline.
- **Infinite Sync Loops:** If database writes trigger an observer that immediately triggers another network sync, an infinite cascade occurs. The network sync must be triggered only by explicit lifecycle intents or pull-to-refresh.

### 🎯 Senior & Staff Interview Evaluation Focus
- **"How do you resolve write conflicts between offline edits and server updates?"** -> Explain conflict resolution strategies: Last-Write-Wins (using UTC server timestamps), Client-Side Mutation Queues with Idempotency Keys, or Operational Transformation (OT) for collaborative text.
- **"What is the 5000ms timeout in SharingStarted.WhileSubscribed?"** -> Prevents tearing down the upstream flow during configuration changes (screen rotation), avoiding redundant network refetches during Activity restarts.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **Doze Mode & Network Partitioning:** Handle Android Doze Mode and background network restrictions by delegating guaranteed durable sync tasks to \`WorkManager\` with \`Constraints.Builder().setRequiredNetworkType(NetworkType.CONNECTED)\`.`,
      testCases: [
        { name: "Device Offline", input: "No network available", expected: "Emits Loading(cached) -> Error(cachedData)" },
        { name: "Happy Path", input: "Network available", expected: "Emits Loading -> Updates DB -> Emits Success(fresh)" }
      ]
    },
    {
      id: "challenge-4",
      title: "Real-Time Audio Buffer Ring Buffer & Channel",
      company: "Worktual Innovations",
      difficulty: "Hard",
      category: "VoIP & Media Streaming",
      summary: "Implement a low-latency audio buffer processor using Coroutines Channel and atomic pointers for VoIP streaming.",
      problemDesc: `In VoIP calling apps, audio frames recorded from the microphone (PCM 16-bit, 48kHz, 20ms packets) arrive on a high-priority hardware thread and must be encoded and transmitted over WebRTC without dropping packets or stalling the UI thread.
      
Implement an \`AudioPacketPipeline\`:
- Buffer capacity of 100 packets.
- If the network stalls and buffer overflows, drop oldest frames (Drop Oldest policy) to maintain real-time conversational latency.
- Thread-safe non-blocking write and coroutine-based non-blocking read.`,
      starterCode: `class AudioPacketPipeline(private val capacity: Int = 100) {
    // TODO: Setup high-throughput buffer for real-time PCM audio
    
    fun onAudioFrameRecorded(frame: ByteArray) {
        // Called from hardware audio record callback
    }
    
    suspend fun receiveAudioPacket(): ByteArray {
        // Consumed by network transmitter coroutine
        return ByteArray(0)
    }
}`,
      solutionCode: `import kotlinx.coroutines.channels.BufferOverflow
import kotlinx.coroutines.channels.Channel

class AudioPacketPipeline(capacity: Int = 100) {
    // Use Channel with DROP_OLDEST for real-time conversational voice
    private val audioChannel = Channel<ByteArray>(
        capacity = capacity,
        onBufferOverflow = BufferOverflow.DROP_OLDEST
    )

    fun onAudioFrameRecorded(frame: ByteArray) {
        // trySend is non-blocking and safe to invoke from high-frequency audio callbacks
        audioChannel.trySend(frame)
    }

    suspend fun receiveAudioPacket(): ByteArray {
        // Suspends cleanly without blocking threads if buffer is empty
        return audioChannel.receive()
    }

    fun close() {
        audioChannel.close()
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **Real-Time Latency vs Packet Loss:** In conversational VoIP (WebRTC/SIP), accumulated audio delay (>150ms) creates severe conversational lag and echo. Dropping the oldest packet (\`BufferOverflow.DROP_OLDEST\`) is vastly superior to dropping recent frames or blocking the thread.
- **Non-Blocking Channel Operations:** \`trySend()\` is guaranteed never to suspend or block, making it safe to call directly from high-priority audio callback threads.
- **Suspension-Based Consumer:** The network transmitter coroutine suspends cleanly via \`audioChannel.receive()\` without busy-waiting or thread spinning when audio packets are pending.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **Executing Heavy Work in AudioRecord Callbacks:** \`AudioRecord.OnRecordPositionUpdateListener\` runs on a native real-time audio thread. Calling database inserts, memory allocations, or blocking locks inside this callback causes immediate audio underruns, glitching, and robotic voice artifacts.
- **Channel Resource Leaks:** When a VoIP call ends, \`audioChannel.close()\` must be invoked. An unclosed channel with buffered byte arrays leaks graphics/native audio memory.
- **Android 14+ Foreground Service Enforcement:** Recording audio in the background requires explicit \`foregroundServiceType="microphone"\` in both AndroidManifest and in \`startForeground()\`. Android 14 will immediately terminate the app with a \`SecurityException\` if the type is omitted.

### 🎯 Senior & Staff Interview Evaluation Focus
- **"How does a Jitter Buffer differ from a Ring Buffer?"** -> A Ring Buffer manages internal hardware recording/playback queues. A Jitter Buffer reorders out-of-order UDP network packets and dynamically adjusts playout delay based on network packet variance.
- **"Why Channel instead of SharedFlow?"** -> Audio packets must be processed exactly once by the network transmitter (Point-to-Point). SharedFlow is broadcast (Pub/Sub) and drops emissions if collectors are absent.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **Packet Sizing:** 20ms frames at 48kHz (960 samples, 1920 bytes for 16-bit PCM) balance transmission header overhead against conversational latency.`,
      testCases: [
        { name: "Burst packet arrivals", input: "150 packets pushed instantly", expected: "Oldest 50 dropped, latest 100 preserved without crash" }
      ]
    },
    {
      id: "challenge-5",
      title: "Dynamic Feature Delivery & Module Loading Architecture",
      company: "Appmysite & Platform SDKs",
      difficulty: "Staff / Principal Level",
      category: "Modularization & Split APKs",
      summary: "Implement a deferred on-demand feature module loader using Play Core SplitInstallManager with lifecycle-safe state observation.",
      problemDesc: `As app binary size exceeds download conversion thresholds, secondary features (e.g. In-Depth Analytics, Pro Camera SDK, PDF Invoice Exporter) must be delivered on-demand as Dynamic Feature Modules (.dfm).

Architect a production-grade \`FeatureModuleManager\` that:
1. Checks if a given feature module is already installed on the device.
2. If not installed, requests download via \`SplitInstallManager\` and exposes download progress reactively via a Kotlin \`Flow<FeatureInstallState>\`.
3. Handles terminal failure states (network disconnect, storage full, user cancellation) and surfaces actionable errors.
4. Once installed, loads the target entry point using reflection and executes the entry-point contract safely without memory leaks.`,
      solutionCode: `import android.content.Context
import com.google.android.play.core.splitinstall.*
import com.google.android.play.core.splitinstall.model.SplitInstallSessionStatus
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow

sealed interface FeatureInstallState {
    data object Installed : FeatureInstallState
    data class Downloading(val bytesDownloaded: Long, val totalBytes: Long) : FeatureInstallState
    data object Installing : FeatureInstallState
    data class Failed(val errorCode: Int, val message: String) : FeatureInstallState
}

interface FeatureEntryPoint {
    fun launch(context: Context)
}

class FeatureModuleManager(
    private val context: Context,
    private val splitInstallManager: SplitInstallManager = SplitInstallManagerFactory.create(context)
) {
    fun isFeatureInstalled(moduleName: String): Boolean {
        return splitInstallManager.installedModules.contains(moduleName)
    }

    fun requestFeatureInstall(moduleName: String): Flow<FeatureInstallState> = callbackFlow {
        if (isFeatureInstalled(moduleName)) {
            trySend(FeatureInstallState.Installed)
            close()
            return@callbackFlow
        }

        val request = SplitInstallRequest.newBuilder()
            .addModule(moduleName)
            .build()

        var sessionId = 0
        val listener = SplitInstallStateUpdatedListener { state ->
            if (state.sessionId() == sessionId) {
                when (state.status()) {
                    SplitInstallSessionStatus.DOWNLOADING -> {
                        trySend(FeatureInstallState.Downloading(
                            bytesDownloaded = state.bytesDownloaded(),
                            totalBytes = state.totalBytesToDownload()
                        ))
                    }
                    SplitInstallSessionStatus.INSTALLING -> {
                        trySend(FeatureInstallState.Installing)
                    }
                    SplitInstallSessionStatus.INSTALLED -> {
                        trySend(FeatureInstallState.Installed)
                        close()
                    }
                    SplitInstallSessionStatus.FAILED -> {
                        trySend(FeatureInstallState.Failed(state.errorCode(), "Download/Install failed"))
                        close()
                    }
                    SplitInstallSessionStatus.CANCELED -> {
                        trySend(FeatureInstallState.Failed(state.errorCode(), "Installation cancelled by user"))
                        close()
                    }
                }
            }
        }

        splitInstallManager.registerListener(listener)

        splitInstallManager.startInstall(request)
            .addOnSuccessListener { id -> sessionId = id }
            .addOnFailureListener { exc ->
                trySend(FeatureInstallState.Failed(-1, exc.message ?: "Failed to start install"))
                close()
            }

        awaitClose {
            splitInstallManager.unregisterListener(listener)
        }
    }

    fun instantiateFeature(className: String): Result<FeatureEntryPoint> {
        return runCatching {
            val clazz = Class.forName(className)
            clazz.getDeclaredConstructor().newInstance() as FeatureEntryPoint
        }
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **Split APK & Modularization Boundaries:** Moving secondary, heavy SDKs into Dynamic Feature Modules (.dfm) reduces initial base APK download size, dramatically improving Google Play Store install conversion rates.
- **Reactive Install Lifecycle via callbackFlow:** Wrapping Play Core's callback-based \`SplitInstallStateUpdatedListener\` inside \`callbackFlow\` creates a clean, observable Kotlin Flow that propagates download percentages (\`Downloading\`), installation status, and error states.
- **Clean Interface Decoupling via Reflection:** The base application module defines an abstract \`FeatureEntryPoint\` contract. The implementation resides inside the dynamic split and is loaded reflectively, preventing circular Gradle module dependencies.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **Missing SplitCompat Installation:** When a dynamic split is downloaded, Android does not automatically update the runtime ClassLoader of existing running Activities. You MUST call \`SplitCompat.installActivity(context)\` in \`attachBaseContext()\`, otherwise attempting to launch an Activity from the split throws \`ClassNotFoundException\`.
- **Leaking Listener Registrations:** If \`unregisterListener(listener)\` is omitted in \`awaitClose\`, Play Core holds strong references to the calling component, causing Activity and ViewModel memory leaks.
- **Disk Storage Exhaustion:** Devices with low available storage fail with \`SplitInstallErrorCode.INSUFFICIENT_STORAGE\`. The UI must catch this specific error code and prompt the user to clear disk space rather than showing a generic failure message.

### 🎯 Senior & Staff Interview Evaluation Focus
- **"How do you navigate to a dynamic feature screen if you cannot import its Activity directly?"** -> 1) Deep links with Jetpack Navigation, 2) Reflection via custom factory contracts, or 3) Dagger/Hilt multi-binding providers.
- **"How do deferred installations work?"** -> \`splitInstallManager.deferredInstall("feature_module")\` schedules the download during idle WiFi/charging via Google Play services without interrupting the user.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **Network Drops During Download:** Play Core automatically pauses and resumes downloads across network interruptions; the state machine must surface \`Downloading\` progress updates accurately without restarting from 0%.`
    },
    {
      id: "challenge-6",
      title: "Hardware BLE Sensor Telemetry with Flow Backpressure",
      company: "Neoveda & IoT Cloud",
      difficulty: "Hard (Lead Level)",
      category: "Hardware & Reactive Streams",
      summary: "Manage high-frequency Bluetooth Low Energy (BLE) peripheral notifications with backpressure buffering and automatic reconnect state machine.",
      problemDesc: `In IoT and fitness wearable apps, BLE hardware sensors emit high-frequency notification packets (e.g. ECG/PPG sensor streams at 100Hz) over a GATT characteristic. The Android Bluetooth stack delivers these on an internal binder thread.

Downstream consumer operations (AES-GCM encryption, database persistence, cloud websocket streaming) take variable processing times (10-30ms), leading to thread starvation and memory spikes if packets accumulate unchecked.

Implement an \`RxBleTelemetryPipeline\`:
1. Wrap \`BluetoothGattCallback.onCharacteristicChanged\` into a lifecycle-safe Kotlin Coroutine \`Flow<SensorPacket>\`.
2. Apply backpressure mitigation (chunking/batching 50 packets per batch or conflating older samples when buffer pressure exceeds limits).
3. Implement an exponential backoff auto-reconnect state machine (1s, 2s, 4s, capped at 16s) if connection drops (\`BluetoothProfile.STATE_DISCONNECTED\`).
4. Ensure zero memory leaks of the \`BluetoothGatt\` instance upon cancellation.`,
      solutionCode: `import android.annotation.SuppressLint
import android.bluetooth.*
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.*
import java.util.UUID

data class SensorPacket(val timestamp: Long, val rawData: ByteArray)

sealed interface DeviceConnectionState {
    data object Connecting : DeviceConnectionState
    data object Connected : DeviceConnectionState
    data class Disconnected(val retryAttempt: Int, val nextRetryDelayMs: Long) : DeviceConnectionState
}

class BleTelemetryPipeline(
    private val bluetoothDevice: BluetoothDevice,
    private val characteristicUuid: UUID,
    private val scope: CoroutineScope
) {
    private val _connectionState = MutableStateFlow<DeviceConnectionState>(DeviceConnectionState.Disconnected(0, 0))
    val connectionState: StateFlow<DeviceConnectionState> = _connectionState.asStateFlow()

    @SuppressLint("MissingPermission")
    fun observeSensorTelemetry(): Flow<List<SensorPacket>> = callbackFlow {
        var gattInstance: BluetoothGatt? = null

        val gattCallback = object : BluetoothGattCallback() {
            override fun onConnectionStateChange(gatt: BluetoothGatt, status: Int, newState: Int) {
                if (newState == BluetoothProfile.STATE_CONNECTED) {
                    _connectionState.value = DeviceConnectionState.Connected
                    gatt.discoverServices()
                } else if (newState == BluetoothProfile.STATE_DISCONNECTED) {
                    gatt.close()
                    gattInstance = null
                    scheduleReconnect()
                }
            }

            override fun onCharacteristicChanged(
                gatt: BluetoothGatt,
                characteristic: BluetoothGattCharacteristic,
                value: ByteArray
            ) {
                if (characteristic.uuid == characteristicUuid) {
                    val packet = SensorPacket(System.currentTimeMillis(), value.clone())
                    trySend(packet)
                }
            }
        }

        gattInstance = bluetoothDevice.connectGatt(null, false, gattCallback, BluetoothDevice.TRANSPORT_LE)

        awaitClose {
            gattInstance?.disconnect()
            gattInstance?.close()
            gattInstance = null
        }
    }
    // 1. Buffer up to 100 packets to decouple Bluetooth binder thread from DB writes
    .buffer(capacity = 100)
    // 2. Batch into chunks of 25 for efficient Room bulk insert
    .chunked(batchSize = 25)
    .flowOn(Dispatchers.IO)

    private fun scheduleReconnect() {
        scope.launch {
            var attempt = 1
            while (_connectionState.value !is DeviceConnectionState.Connected) {
                val delayMs = (1000L * (1L shl (attempt - 1))).coerceAtMost(16000L)
                _connectionState.value = DeviceConnectionState.Disconnected(attempt, delayMs)
                delay(delayMs)
                attempt++
                // Trigger connection attempt
            }
        }
    }
}

// Extension function to chunk flow emissions into micro-batches
fun <T> Flow<T>.chunked(batchSize: Int): Flow<List<T>> = flow {
    val batch = ArrayList<T>(batchSize)
    collect { item ->
        batch.add(item)
        if (batch.size >= batchSize) {
            emit(ArrayList(batch))
            batch.clear()
        }
    }
    if (batch.isNotEmpty()) {
        emit(batch)
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **Asynchronous GATT Callback to Flow Adaptation:** \`callbackFlow\` bridges native Android Bluetooth binder threads into structured Coroutines, ensuring proper lifecycle management through \`awaitClose\`.
- **Backpressure Mitigation via Micro-Batching:** Processing 100 individual sensor notifications per second creates severe SQLite write lock contention. Micro-batching via \`.chunked(25)\` reduces database transactions by 96% while maintaining low telemetry latency.
- **Decoupled Buffer Isolation:** \`.buffer(100)\` decouples high-priority Bluetooth daemon callbacks from disk I/O, preventing the Bluetooth binder thread from dropping incoming packets during slow database writes.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **Leaking GATT Client Registrations:** Android enforces a hard system-wide limit of **32 concurrent Bluetooth GATT client connections** across all apps. If \`gatt.close()\` is not called in \`awaitClose\`, every reconnection consumes an unreleased slot, causing the OS Bluetooth stack to refuse all connections until phone reboot!
- **Shared Native Byte Array Corruption:** Android's internal Bluetooth stack reuses the same underlying \`byte[]\` buffer across consecutive \`onCharacteristicChanged\` callbacks. You MUST call \`value.clone()\` or \`copyOf()\` before dispatching, otherwise values will be overwritten in memory before they are processed!
- **GATT Operation Serialization:** The Android BLE stack can only execute ONE GATT operation (read, write, or MTU request) at any given time. Triggering a second operation before receiving the callback for the first results in immediate silent failure.

### 🎯 Senior & Staff Interview Evaluation Focus
- **"What Android 12+ permissions are required for BLE?"** -> \`BLUETOOTH_SCAN\` (with \`neverForLocation\` flag if beacon tracking isn't used) and \`BLUETOOTH_CONNECT\`. On Android 11 and lower, \`ACCESS_FINE_LOCATION\` was mandatory.
- **"Why is MTU negotiation important?"** -> Default BLE MTU payload is 20 bytes (23 bytes minus 3 bytes overhead). Negotiating 512 bytes via \`gatt.requestMtu(512)\` increases data throughput by up to 20x.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **Exponential Reconnection Backoff:** Reconnecting immediately in an unthrottled loop drains battery and triggers internal Bluetooth daemon throttling. Backing off exponentially (1s, 2s, 4s, up to 16s) ensures hardware stability.`
    },
    {
      id: "challenge-7",
      title: "Hardware-Backed Android Keystore AES-GCM Encryptor",
      company: "Global MNC (Daksh) & FinTech",
      difficulty: "Hard (Lead Level)",
      category: "OWASP Mobile Security",
      summary: "Implement an enterprise-grade cryptographic utility utilizing StrongBox/TEE Keystore with authenticated encryption and IV rotation.",
      problemDesc: `Storing sensitive API credentials, refresh tokens, or biometric authorization keys in unencrypted SharedPreferences violates OWASP Mobile Top 10 (M1: Improper Credential Usage & M2: Inadequate Supply Chain).

Implement a production cryptographic module \`AndroidCryptoManager\`:
1. Use the Android Keystore provider to generate or retrieve an AES-256 key without ever exposing raw key bytes to user-space memory.
2. Leverage \`KeyGenParameterSpec\` with hardware backing (attempting \`setIsStrongBoxBacked(true)\` with graceful fallback to standard Trusted Execution Environment / TEE).
3. Encrypt data using \`AES/GCM/NoPadding\` with a cryptographically secure 12-byte Initialization Vector (IV) generated per encryption operation.
4. Prepend the IV to the ciphertext payload for seamless storage.
5. In decrypt, extract the 12-byte IV, verify the 128-bit authentication tag (AEAD), and sanitize sensitive plaintext byte buffers from JVM memory immediately after use.`,
      solutionCode: `import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyProperties
import java.security.KeyStore
import javax.crypto.Cipher
import javax.crypto.KeyGenerator
import javax.crypto.SecretKey
import javax.crypto.spec.GCMParameterSpec

class AndroidCryptoManager(
    private val keyAlias: String = "AppMasterSecretKey_v1"
) {
    companion object {
        private const val ANDROID_KEYSTORE = "AndroidKeyStore"
        private const val TRANSFORMATION = "AES/GCM/NoPadding"
        private const val GCM_IV_LENGTH_BYTES = 12
        private const val GCM_TAG_LENGTH_BITS = 128
    }

    private val keyStore = KeyStore.getInstance(ANDROID_KEYSTORE).apply { load(null) }

    @Synchronized
    fun getOrCreateKey(): SecretKey {
        val existingKey = keyStore.getEntry(keyAlias, null) as? KeyStore.SecretKeyEntry
        if (existingKey != null) {
            return existingKey.secretKey
        }

        val keyGenerator = KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES, ANDROID_KEYSTORE)
        val specBuilder = KeyGenParameterSpec.Builder(
            keyAlias,
            KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT
        )
            .setBlockModes(KeyProperties.BLOCK_MODE_GCM)
            .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
            .setKeySize(256)
            .setRandomizedEncryptionRequired(true)

        // Try StrongBox hardware security module if available on modern devices
        try {
            specBuilder.setIsStrongBoxBacked(true)
            keyGenerator.init(specBuilder.build())
            return keyGenerator.generateKey()
        } catch (e: Exception) {
            // Fallback to standard TEE (Trusted Execution Environment)
            specBuilder.setIsStrongBoxBacked(false)
            keyGenerator.init(specBuilder.build())
            return keyGenerator.generateKey()
        }
    }

    fun encrypt(plainTextBytes: ByteArray): ByteArray {
        val cipher = Cipher.getInstance(TRANSFORMATION)
        cipher.init(Cipher.ENCRYPT_MODE, getOrCreateKey())
        val iv = cipher.iv // 12-byte IV generated automatically by SecureRandom
        val cipherText = cipher.doFinal(plainTextBytes)

        // Combine IV (12 bytes) + CipherText (includes 16-byte AEAD authentication tag)
        val combined = ByteArray(iv.size + cipherText.size)
        System.arraycopy(iv, 0, combined, 0, iv.size)
        System.arraycopy(cipherText, 0, combined, iv.size, cipherText.size)
        return combined
    }

    fun decrypt(combinedData: ByteArray): ByteArray {
        require(combinedData.size > GCM_IV_LENGTH_BYTES) { "Invalid payload size" }

        val iv = ByteArray(GCM_IV_LENGTH_BYTES)
        System.arraycopy(combinedData, 0, iv, 0, GCM_IV_LENGTH_BYTES)

        val cipherTextSize = combinedData.size - GCM_IV_LENGTH_BYTES
        val cipherText = ByteArray(cipherTextSize)
        System.arraycopy(combinedData, GCM_IV_LENGTH_BYTES, cipherText, 0, cipherTextSize)

        val cipher = Cipher.getInstance(TRANSFORMATION)
        val spec = GCMParameterSpec(GCM_TAG_LENGTH_BITS, iv)
        cipher.init(Cipher.DECRYPT_MODE, getOrCreateKey(), spec)

        return cipher.doFinal(cipherText)
    }

    // Securely wipe sensitive byte array in memory (preventing memory dump inspection)
    fun wipeByteArray(array: ByteArray) {
        array.fill(0)
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **Hardware-Isolated Key Storage (TEE / StrongBox):** Cryptographic keys are generated directly inside the Android Keystore hardware module and never appear in plain text in the Linux kernel or user-space memory, protecting credentials even on rooted devices.
- **Authenticated Encryption with Associated Data (AEAD):** AES-GCM combines symmetric encryption with an authentication tag. Tampering with any byte of ciphertext or metadata causes decryption to throw an \`AEADBadTagException\`, preventing padding oracle attacks and bit-flipping attacks.
- **Cryptographically Random IV Per Operation:** Android Keystore enforces \`setRandomizedEncryptionRequired(true)\`, ensuring a fresh 12-byte initialization vector is generated for every single encryption call.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **The Fatal IV Reuse Vulnerability:** Reusing an IV with the same AES-GCM key catastrophically leaks the key stream and allows adversaries to forge valid ciphertexts. NEVER hardcode an IV or reuse a static counter.
- **Plaintext String In-Memory Leakage:** In Java/Kotlin, \`String\` instances are immutable and remain in the JVM garbage collection heap for an indefinite time, making them vulnerable to heap dump inspection. Always handle sensitive tokens as \`ByteArray\` and zero them immediately with \`.fill(0)\`.
- **StrongBox Hardware Availability:** StrongBox is a separate physical hardware chip present only on modern high-end devices (Pixel Titan M, modern Samsung Knox). You MUST wrap \`setIsStrongBoxBacked(true)\` in a try-catch and fall back gracefully to standard TEE.

### 🎯 Senior & Staff Interview Evaluation Focus
- **"Why AES-GCM over AES-CBC?"** -> AES-CBC requires PKCS7 padding and does not verify data authenticity, making it susceptible to Padding Oracle attacks. AES-GCM provides authenticated encryption with integrity guarantees built-in.
- **"How do you bind encryption to Biometric Prompt?"** -> Configure \`setUserAuthenticationRequired(true)\` and pass a \`BiometricPrompt.CryptoObject(cipher)\` to require user biometric authentication before cipher initialization.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **Key Invalidation on New Biometric Enrollment:** If \`setInvalidatedByBiometricEnrollment(true)\` is set, enrolling a new fingerprint invalidates the key to prevent unauthorized device access.`
    },
    {
      id: "challenge-8",
      title: "Zero-Downtime Java/XML to Compose Interop Architecture",
      company: "Vinove & TCS",
      difficulty: "Medium-Hard",
      category: "Legacy Modernization",
      summary: "Bridge legacy Android XML View hierarchy with Jetpack Compose while managing LifecycleOwner disposal and two-way state binding.",
      problemDesc: `Large enterprise codebases with millions of lines of Java/Kotlin XML Views cannot be rewritten in Jetpack Compose overnight. Senior engineers must lead incremental modernization strategies.

You are tasked with embedding a modern, skippable Compose checkout summary inside an existing XML-based \`RecyclerView\` list and an XML \`Activity\`.

Implement a robust interop bridge addressing:
1. Configuring \`ComposeView.setViewCompositionStrategy\` properly to prevent memory leaks and orphaned compositions when the host Fragment or RecyclerView ViewHolder is recycled or destroyed.
2. Synchronizing legacy \`LiveData<OrderState>\` into Compose without triggering recomposition churn or dropped frames.
3. Propagating Compose UI user interactions (e.g. coupon apply, payment tap) back to the legacy ViewModel via clean callback contracts.
4. Preserving the app's custom XML theme attributes inside the Compose MaterialTheme wrapper.`,
      solutionCode: `import android.content.Context
import android.util.AttributeSet
import android.widget.FrameLayout
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.*
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LiveData

data class OrderState(val totalAmount: Double, val discountApplied: Boolean, val itemCount: Int)

class OrderSummaryComposeBridge @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : FrameLayout(context, attrs, defStyleAttr) {

    private val composeView = ComposeView(context).apply {
        // 1. Mandatory for RecyclerView or Fragment interop: Dispose when lifecycle destroys
        setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
    }

    init {
        addView(composeView)
    }

    fun bind(
        orderStateLiveData: LiveData<OrderState>,
        onApplyCoupon: (String) -> Unit,
        onProceedToCheckout: () -> Unit
    ) {
        composeView.setContent {
            // 2. Wrap in App Design System Theme
            MaterialTheme {
                val state by orderStateLiveData.observeAsState(
                    initial = OrderState(0.0, false, 0)
                )

                OrderSummaryContent(
                    orderState = state,
                    onApplyCoupon = onApplyCoupon,
                    onProceedToCheckout = onProceedToCheckout
                )
            }
        }
    }
}

@Composable
fun OrderSummaryContent(
    orderState: OrderState,
    onApplyCoupon: (String) -> Unit,
    onProceedToCheckout: () -> Unit
) {
    // Pure Compose skippable UI implementation
    // Automatically recomposes only when orderState properties change
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **ViewCompositionStrategy Lifecycle Disposal:** \`ComposeView\` requires an explicit composition disposal strategy. Using \`DisposeOnViewTreeLifecycleDestroyed\` binds the Compose lifecycle directly to the host Fragment or Activity, matching traditional View lifecycle semantics.
- **Custom FrameLayout Bridge Encapsulation:** Encapsulating \`ComposeView\` within an Android \`FrameLayout\` allows legacy XML layouts to incorporate Compose components via standard XML tags (\`<com.app.OrderSummaryComposeBridge ... />\`) without rewriting the host Activity.
- **Reactive State Bridging:** Utilizing \`orderStateLiveData.observeAsState()\` establishes clean, two-way reactive state observation that automatically unregisters when the composable leaves the composition hierarchy.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **The Default DisposeOnDetachedFromWindow Trap:** By default, \`ComposeView\` disposes its composition when the view detaches from the window. In a \`RecyclerView\` or scrolling list, items detach and reattach continuously, tearing down and rebuilding the entire composition hierarchy and causing severe dropped frames!
- **MaterialTheme Attribute Mismatch:** XML theme attributes (e.g. \`?attr/colorPrimary\`) do not automatically propagate into Compose composables. Wrap all interop composables in a Compose \`MaterialTheme\` or use Google's Accompanist / Material theme adapter.
- **ViewModel Lifecycle Scoping:** If a composable calls \`viewModel()\` inside a \`RecyclerView\` item, it attaches to the Activity lifecycle instead of the item, leaking references and accumulating stale state. Always pass state down and events up via callbacks.

### 🎯 Senior & Staff Interview Evaluation Focus
- **"What is the Strangler Fig pattern in mobile modernization?"** -> Incrementally replacing individual UI components (e.g. list items, bottom sheets) with Compose inside legacy XML screens, rather than attempting a risky, multi-month rewrite of the entire codebase.
- **"How do you profile hybrid XML/Compose performance?"** -> Use Android Studio System Trace (Perfetto) to inspect \`Compose:recompose\` slices alongside traditional \`Choreographer#doFrame\` and \`View#draw\` traces.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **Initial Composition Overhead:** The first Compose rendering on an XML screen incurs a small cold compilation penalty; warm up Compose runtime during splash screen initialization for instant rendering.`
    },
    {
      id: "challenge-9",
      title: "Kotlin Multiplatform (KMP) Unidirectional MVI State Store",
      company: "Swits Digital & Atlassian",
      difficulty: "Staff / Principal Level",
      category: "KMP & Architecture",
      summary: "Implement a thread-safe, multiplatform MVI Store supporting Intent dispatch, State reduction, and one-off Side Effects across Android and iOS.",
      problemDesc: `In a Kotlin Multiplatform (KMP) application, business logic, networking, and state management are shared between Android and iOS. The presentation architecture cannot rely on Android-specific \`androidx.lifecycle.ViewModel\`.

Implement a reusable, thread-safe \`MviStore<Intent, State, Effect>\` in pure Kotlin:
1. Expose current state via \`StateFlow<State>\` with an immutable initial state.
2. Process \`Intent\` actions sequentially via a background Coroutine channel (preventing race conditions during rapid user input).
3. Support one-off side effects (e.g. Navigation routes, Snackbar alerts, biometric prompts) using a single-reader \`Channel\` without replay.
4. Provide a structured cancellation scope that cancels all child coroutines when the screen unmounts on either Android (ViewModel onCleared) or iOS (deinit).`,
      solutionCode: `import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.*

interface MviIntent
interface MviState
interface MviEffect

abstract class MviStore<I : MviIntent, S : MviState, E : MviEffect>(
    initialState: S,
    private val scope: CoroutineScope
) {
    private val _state = MutableStateFlow(initialState)
    val state: StateFlow<S> = _state.asStateFlow()

    private val _effects = Channel<E>(capacity = Channel.BUFFERED)
    val effects: Flow<E> = _effects.receiveAsFlow()

    private val intentChannel = Channel<I>(capacity = Channel.UNLIMITED)

    init {
        scope.launch {
            // Process intents sequentially in FIFO order
            intentChannel.receiveAsFlow().collect { intent ->
                handleIntent(intent)
            }
        }
    }

    fun dispatch(intent: I) {
        intentChannel.trySend(intent)
    }

    protected abstract suspend fun handleIntent(intent: I)

    protected fun updateState(reducer: (S) -> S) {
        _state.update(reducer)
    }

    protected suspend fun sendEffect(effect: E) {
        _effects.send(effect)
    }

    fun close() {
        scope.cancel()
        intentChannel.close()
        _effects.close()
    }
}

// Example Implementation
data class SearchState(val query: String = "", val results: List<String> = emptyList(), val isLoading: Boolean = false) : MviState
sealed interface SearchIntent : MviIntent {
    data class QueryChanged(val newQuery: String) : SearchIntent
    data object ClearSearch : SearchIntent
}
sealed interface SearchEffect : MviEffect {
    data class ShowToast(val message: String) : SearchEffect
}

class SearchStore(scope: CoroutineScope) : MviStore<SearchIntent, SearchState, SearchEffect>(SearchState(), scope) {
    override suspend fun handleIntent(intent: SearchIntent) {
        when (intent) {
            is SearchIntent.QueryChanged -> {
                updateState { it.copy(query = intent.newQuery, isLoading = true) }
                // Perform async search query
            }
            SearchIntent.ClearSearch -> {
                updateState { it.copy(query = "", results = emptyList(), isLoading = false) }
                sendEffect(SearchEffect.ShowToast("Search cleared"))
            }
        }
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **Pure Kotlin Multiplatform State Store:** Decouples business logic from platform-specific APIs (\`androidx.lifecycle.ViewModel\`), allowing 100% shared state management across Android, iOS (SwiftUI), and Desktop.
- **Sequential Intent Processing via Channel:** User actions (\`Intent\`) are queued through a FIFO Coroutines \`Channel\`, guaranteeing that state reductions execute strictly in order and eliminating split-brain race conditions from concurrent background threads.
- **Separation of State vs One-Off Effects:** \`StateFlow\` represents persistent, durable UI state. Transient one-off side effects (e.g. navigation routes, error toasts) are piped through a single-consumption \`Channel.receiveAsFlow()\`.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **The StateFlow Effect Replay Trap:** \`StateFlow\` caches its latest value and replays it to any new subscriber. If you put one-off navigation events in \`StateFlow\`, rotating the screen or navigating back re-subscribes the collector and causes duplicate navigation! Always use \`Channel\` for events.
- **Darwin (iOS) Structured Concurrency Leaks:** On iOS, Swift views do not automatically cancel Kotlin CoroutineScopes when deallocated. The KMP Store must expose an explicit \`close()\` or \`cancel()\` method called in SwiftUI's \`.onDisappear\` or \`deinit\`.
- **Freezing & Immutability in KMP:** State models must be immutable data classes. Mutating a shared state object in-place across threads will throw an exception or cause desynchronization in multi-threaded KMP environments.

### 🎯 Senior & Staff Interview Evaluation Focus
- **"How does Swift in iOS collect Kotlin StateFlow and Flow?"** -> Using Kotlin/Native export tools like SKIE or KMP-NativeCoroutines, which automatically convert Kotlin \`StateFlow\` into native Swift \`AsyncSequence\` or \`@Published\` properties.
- **"Why MVI over standard MVVM for cross-platform apps?"** -> Unidirectional Data Flow (Intent -> Store -> Reducer -> State) creates a deterministic state machine that can be unit-tested without UI dependencies or platform emulators.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **Actor-Style Channel Concurrency:** Queuing intents in a Channel bounds CPU consumption and prevents UI button double-tap race conditions.`
    },
    {
      id: "challenge-10",
      title: "Memory-Conscious LRU Bitmap Memory Cache",
      company: "Photon & Media Products",
      difficulty: "Hard (Lead Level)",
      category: "Memory Profiling & Runtime Internals",
      summary: "Construct a high-performance in-memory LRU Bitmap cache with dynamic heap allocation and low-memory callback trimming.",
      problemDesc: `High-resolution image catalogs and e-commerce listing grids consume massive amounts of graphics memory. Without disciplined memory management, apps suffer from frequent Garbage Collection (GC) pauses, dropped frames, and \`OutOfMemoryError\` (OOM).

Construct an enterprise-grade \`BitmapMemoryCache\`:
1. Dynamically configure cache capacity based on available device RAM (allocate 1/8th of the max heap returned by \`Runtime.getRuntime().maxMemory()\`).
2. Measure cache entries by their exact memory footprint in bytes (\`Bitmap.allocationByteCount\`) rather than mere entry count.
3. Integrate with Android's \`ComponentCallbacks2\` to dynamically evict cached bitmaps when the OS signals memory pressure (\`TRIM_MEMORY_RUNNING_CRITICAL\`, \`TRIM_MEMORY_RUNNING_LOW\`, or \`TRIM_MEMORY_UI_HIDDEN\`).
4. Ensure thread-safe concurrent read/write operations without locking the UI thread.`,
      solutionCode: `import android.content.ComponentCallbacks2
import android.content.res.Configuration
import android.graphics.Bitmap
import android.util.LruCache

class BitmapMemoryCache(
    maxMemoryBytes: Int = (Runtime.getRuntime().maxMemory() / 8).toInt()
) : ComponentCallbacks2 {

    private val cache = object : LruCache<String, Bitmap>(maxMemoryBytes) {
        override fun sizeOf(key: String, bitmap: Bitmap): Int {
            // Measure actual allocated memory footprint in bytes
            return bitmap.allocationByteCount
        }

        override fun entryRemoved(evicted: Boolean, key: String, oldValue: Bitmap, newValue: Bitmap?) {
            // Optional: Return bitmap to a BitmapPool for reuse in BitmapFactory.Options.inBitmap
        }
    }

    fun get(key: String): Bitmap? {
        return cache.get(key)
    }

    fun put(key: String, bitmap: Bitmap) {
        if (get(key) == null) {
            cache.put(key, bitmap)
        }
    }

    fun clear() {
        cache.evictAll()
    }

    override fun onTrimMemory(level: Int) {
        when {
            // App is still running but OS is critically low on memory
            level >= ComponentCallbacks2.TRIM_MEMORY_RUNNING_CRITICAL -> {
                cache.evictAll()
            }
            // App UI is hidden (backgrounded) - trim to 50% capacity
            level >= ComponentCallbacks2.TRIM_MEMORY_UI_HIDDEN -> {
                cache.trimToSize(cache.maxSize() / 2)
            }
            // Background process memory pressure
            level >= ComponentCallbacks2.TRIM_MEMORY_BACKGROUND -> {
                cache.trimToSize(cache.maxSize() / 2)
            }
        }
    }

    override fun onConfigurationChanged(newConfig: Configuration) {
        // No-op
    }

    override fun onLowMemory() {
        // Severe legacy fallback - clear entire cache
        cache.evictAll()
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production Code
- **Dynamic Runtime Heap Sizing:** Hardcoding cache limits (e.g. 50MB) crashes low-end Android Go devices and starves high-end flagship devices. Allocating 1/8th of \`Runtime.getRuntime().maxMemory()\` dynamically scales cache budget to available device RAM.
- **Byte-Accurate Size Calculation:** Overriding \`sizeOf()\` to return \`bitmap.allocationByteCount\` measures true native memory usage rather than counting entries, preventing OutOfMemoryError (OOM) when caching large images.
- **Lifecycle-Aware Low-Memory Trimming:** Implementing \`ComponentCallbacks2\` allows the cache to respond proactively to OS memory pressure signals, evicting cache entries before the Android Low Memory Killer (LMK) terminates the app process.

### ⚠️ Critical Production Gotchas (Needs Attention)
- **allocationByteCount vs byteCount:** On Android 4.4+ (API 19+), bitmaps can be reused to decode different images using \`inBitmap\`. \`byteCount\` only measures the current pixel size, whereas \`allocationByteCount\` reflects the true allocated memory footprint in native memory.
- **Calling bitmap.recycle() Prematurely:** Never call \`bitmap.recycle()\` on a cached bitmap during cache eviction if the bitmap might still be referenced by an active \`ImageView\` or Compose Canvas. Doing so causes an immediate \`Canvas: trying to use a recycled bitmap\` runtime crash!
- **Ignoring ComponentCallbacks2 in Background:** When the user presses Home and the app is backgrounded, the OS sends \`TRIM_MEMORY_UI_HIDDEN\`. Failing to trim cache capacity increases the probability that the Android kernel kills your process to reclaim memory for foreground apps.

### 🎯 Senior & Staff Interview Evaluation Focus
- **"What causes Garbage Collection pauses in Android image feeds?"** -> Frequent allocations and deallocations of large byte arrays force the ART runtime into concurrent mark-sweep GC cycles, causing frame drops (jank). Solve with \`BitmapPool\` and \`BitmapFactory.Options.inBitmap\`.
- **"Should you set android:largeHeap='true' in AndroidManifest?"** -> No. Large Heap delays GC, causes longer GC pauses, and indicates poor memory discipline during Lead engineer code reviews.

### ⚖️ Architectural Trade-Offs & Edge Case Resilience
- **L1 (Memory) vs L2 (Disk) Caching:** Memory cache (fastest, volatile) backed by DiskLruCache (persistent, handles cold starts) provides 60FPS scrolling with offline image viewing.`
    }
    ,
    {
      id: "challenge-11",
      title: "WorkManager Expedited Sync Engine with Exponential Backoff",
      company: "Swits Digital & Enterprise Track",
      difficulty: "Hard (Lead Level)",
      category: "Background Processing & Concurrency",
      summary: "Implement an enterprise WorkManager CoroutineWorker with expedited execution, Network Constraints, and exponential retry backoff.",
      problemDesc: `In mission-critical enterprise applications, offline mutations (e.g. order approvals, inventory counts) must sync immediately when connectivity returns, even if the user backgrounded the app or the device entered Doze mode.

Construct a resilient \`ExpeditedSyncWorker\`:
1. Extend \`CoroutineWorker\` and implement \`getForegroundInfo()\` required for expedited jobs on Android 11 and lower.
2. Configure dynamic constraints requiring an unmetered, connected network (\`NetworkType.UNMETERED\`) and battery not low.
3. Catch transient HTTP 5xx network exceptions and trigger exponential backoff retry via \`Result.retry()\`.
4. Ensure critical unrecoverable 4xx authentication errors abort cleanly with \`Result.failure()\`.
5. Gracefully handle coroutine cancellation when the OS reclaims expedited execution quota.`,
      solutionCode: `import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import androidx.core.app.NotificationCompat
import androidx.work.*
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

class ExpeditedSyncWorker(
    appContext: Context,
    workerParams: WorkerParameters,
    private val syncRepository: SyncRepository = SyncRepositoryLocator.get()
) : CoroutineWorker(appContext, workerParams) {

    companion object {
        const val WORK_NAME = "expedited_sync_work"
        private const val CHANNEL_ID = "sync_channel"
        private const val NOTIFICATION_ID = 404

        fun buildRequest(): OneTimeWorkRequest {
            val constraints = Constraints.Builder()
                .setRequiredNetworkType(NetworkType.CONNECTED)
                .setRequiresBatteryNotLow(true)
                .build()

            return OneTimeWorkRequestBuilder<ExpeditedSyncWorker>()
                .setConstraints(constraints)
                .setExpedited(OutOfQuotaPolicy.RUN_AS_NON_EXPEDITED_WORK_REQUEST)
                .setBackoffCriteria(
                    BackoffPolicy.EXPONENTIAL,
                    WorkRequest.MIN_BACKOFF_MILLIS,
                    java.util.concurrent.TimeUnit.MILLISECONDS
                )
                .addTag("telemetry_sync")
                .build()
        }
    }

    override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
        try {
            // Check if OS cancelled expedited work before starting
            if (isStopped) return@withContext Result.retry()

            // Execute delta sync
            val pendingCount = syncRepository.getPendingMutationCount()
            if (pendingCount == 0) return@withContext Result.success()

            val success = syncRepository.flushPendingMutations()
            if (success) {
                Result.success()
            } else {
                // Transient error: schedule exponential retry
                Result.retry()
            }
        } catch (e: CancellationException) {
            // WorkManager stopped the coroutine (e.g. quota depleted, constraints violated)
            Result.retry()
        } catch (e: AuthException) {
            // Unrecoverable authentication error: do not retry endlessly
            Result.failure()
        } catch (e: Exception) {
            if (runAttemptCount < 3) Result.retry() else Result.failure()
        }
    }

    override suspend fun getForegroundInfo(): ForegroundInfo {
        val notification = createSyncNotification()
        return ForegroundInfo(NOTIFICATION_ID, notification)
    }

    private fun createSyncNotification(): Notification {
        val nm = applicationContext.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        val channel = NotificationChannel(
            CHANNEL_ID,
            "Data Sync Service",
            NotificationManager.IMPORTANCE_LOW
        )
        nm.createNotificationChannel(channel)

        return NotificationCompat.Builder(applicationContext, CHANNEL_ID)
            .setContentTitle("Syncing Data")
            .setContentText("Uploading pending offline mutations...")
            .setSmallIcon(android.R.drawable.stat_notify_sync)
            .setOngoing(true)
            .build()
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production
- **Expedited Jobs vs Foreground Services (Android 12+):** Android 12 severely restricts background apps from launching Foreground Services. Expedited WorkRequests run with high priority immediately, bypassing Doze and App Standby, without holding an ongoing notification on Android 12+.
- **OutOfQuotaPolicy:** Each app is allocated an execution quota for expedited jobs. \`OutOfQuotaPolicy.RUN_AS_NON_EXPEDITED_WORK_REQUEST\` ensures the task smoothly falls back to a regular scheduled WorkRequest if the quota is exhausted rather than failing.
- **getForegroundInfo() Requirement:** Even on Android 12+, WorkManager mandates implementing \`getForegroundInfo()\` so it can fall back to a Foreground Service notification when running on Android 11 or earlier.

### ⚠️ Common Production Gotchas & Anti-Patterns
- **Catching CancellationException Silently:** If \`try-catch (e: Exception)\` catches \`CancellationException\` without rethrowing or returning \`Result.retry()\`, WorkManager cannot detect that the OS stopped the worker, causing orphaned state.
- **Heavy Injections in Worker Constructors:** Never inject large Activity or UI Contexts into Workers. Use WorkerFactory or Hilt \`@HiltWorker\` with constructor injection for testability.

### 🎙️ Staff-Level Interview Talking Points
- **Q: "Why use WorkManager instead of CoroutineScope(Dispatchers.IO).launch in a Service?"** -> Custom coroutines die when the OS kills the app process. WorkManager persists job definitions in an internal SQLite database and resumes execution across device reboots and process death.`,
      testCases: [
        { name: "Expedited execution with network", input: "Network connected, battery healthy", expected: "Result.success() returned within quota" },
        { name: "Transient HTTP 503 error", input: "Server unreachable (503)", expected: "Result.retry() with exponential backoff" },
        { name: "Quota exhaustion fallback", input: "App exceeded expedited quota", expected: "Executes safely as standard WorkRequest" }
      ]
    },
    {
      id: "challenge-12",
      title: "Custom Jetpack Compose Layout (Fluid Staggered Masonry Grid)",
      company: "Bounteous & Modern Web/Mobile",
      difficulty: "Hard (Lead Level)",
      category: "Compose UI & Custom Layouts",
      summary: "Create a custom high-performance Compose Layout with dynamic multi-column height balancing and intrinsic measurement.",
      problemDesc: `While Compose provides \`LazyVerticalGrid\`, complex Pinterest-style masonry feeds or dynamic dashboard widgets require a staggered multi-column layout where items of arbitrary heights are continuously placed into the shortest current column to prevent white gaps.

Construct a production-ready custom \`StaggeredMasonryLayout\`:
1. Use the core \`Layout(content, modifier) { measurables, constraints -> ... }\` composable API.
2. Divide available max width across \`columns\` (e.g. 2 or 3 columns).
3. Measure each child measurable with exact column width constraints.
4. Maintain an array of current column heights and place each child into whichever column is currently lowest.
5. Compute the total layout width and max column height, calling \`layout(totalWidth, maxHeight)\` with exact coordinates for each placeable.`,
      solutionCode: `import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import kotlin.math.max

@Composable
fun StaggeredMasonryLayout(
    modifier: Modifier = Modifier,
    columns: Int = 2,
    horizontalSpacing: Dp = 8.dp,
    verticalSpacing: Dp = 8.dp,
    content: @Composable () -> Unit
) {
    require(columns > 0) { "Columns must be greater than 0" }

    Layout(
        content = content,
        modifier = modifier
    ) { measurables, constraints ->
        val hSpacingPx = horizontalSpacing.roundToPx()
        val vSpacingPx = verticalSpacing.roundToPx()

        // Calculate uniform width for each column
        val totalSpacing = hSpacingPx * (columns - 1)
        val columnWidth = ((constraints.maxWidth - totalSpacing) / columns).coerceAtLeast(0)
        val itemConstraints = constraints.copy(minWidth = columnWidth, maxWidth = columnWidth)

        // Measure all children with fixed column width
        val placeables = measurables.map { measurable ->
            measurable.measure(itemConstraints)
        }

        // Track accumulated height per column
        val colHeights = IntArray(columns) { 0 }
        
        // Store computed (x, y) coordinates for each child
        class ItemPlacement(val x: Int, val y: Int)
        val placements = placeables.map { placeable ->
            // Find the shortest column index
            var minCol = 0
            for (col in 1 until columns) {
                if (colHeights[col] < colHeights[minCol]) {
                    minCol = col
                }
            }

            val x = minCol * (columnWidth + hSpacingPx)
            val y = colHeights[minCol]

            // Advance the height of this column
            colHeights[minCol] += placeable.height + vSpacingPx

            ItemPlacement(x, y)
        }

        // Total layout height is the tallest column (minus trailing vertical spacing)
        val totalHeight = (colHeights.maxOrNull() ?: 0).coerceIn(constraints.minHeight, constraints.maxHeight)

        layout(width = constraints.maxWidth, height = totalHeight) {
            placeables.forEachIndexed { index, placeable ->
                val pos = placements[index]
                placeable.placeRelative(x = pos.x, y = pos.y)
            }
        }
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production
- **The Three Phases of Compose:** Composition -> Layout (Measure & Place) -> Drawing. By implementing custom \`Layout\`, we perform measuring and placing directly in the Layout phase, avoiding expensive recompositions when children merely reposition.
- **Single-Pass Measurement Guarantee:** Compose enforces that every node is measured exactly once per layout pass (O(N) efficiency), preventing the exponential 2^N measure cycles of legacy Android nested \`LinearLayout\` with weights.
- **SubcomposeLayout vs Layout:** Use \`SubcomposeLayout\` ONLY when the composition of child B strictly depends on the measured dimensions of child A (like \`LazyColumn\`). For a known set of composables, \`Layout\` is dramatically more performant and uses zero extra allocations.

### ⚠️ Common Production Gotchas & Anti-Patterns
- **Reading State in Composition vs Layout:** Do not read fast-changing states (e.g. scroll offsets) inside the body of a custom composable. Pass them through \`Modifier.offset { ... }\` or inside the layout block to skip the composition phase.
- **Ignoring Constraints minWidth / minHeight:** Custom layouts must always clamp their returned layout dimensions using \`constraints.minWidth..maxWidth\` to support unbounded parent constraints.

### 🎙️ Staff-Level Interview Talking Points
- **Q: "Why not use nested Row and Columns for masonry grids?"** -> Nested Row/Column requires pre-sorting items into column buckets ahead of time, which breaks dynamic animations and requires manual column redistribution whenever items are added or resized.`,
      testCases: [
        { name: "2 Column balanced placement", input: "Items of heights [100, 200, 150, 80]", expected: "Col 0: [100, 150], Col 1: [200, 80] - Balanced" },
        { name: "Zero item count edge case", input: "Empty content block", expected: "Layout returns (maxWidth, 0) without exceptions" },
        { name: "Custom horizontal spacing", input: "horizontalSpacing = 16.dp", expected: "Item constraints properly subtract spacing between columns" }
      ]
    },
    {
      id: "challenge-13",
      title: "Leak-Free Paging 3 RemoteMediator with Room and Flow",
      company: "Photon & High-Scale Media",
      difficulty: "Hard (Lead Level)",
      category: "Offline-First & Architecture",
      summary: "Implement a production-grade RemoteMediator that synchronizes paged remote API data with Room SQLite database with transactional consistency.",
      problemDesc: `Building an endless feed that works completely offline requires Android Jetpack Paging 3's \`RemoteMediator\`. The database serves as the single source of truth for the UI, while the mediator fetches new pages from the network when the database runs out of cached items.

Implement \`NewsRemoteMediator\`:
1. Extend \`RemoteMediator<Int, ArticleEntity>\` with an atomic Room transaction.
2. Resolve next/prev page keys based on \`LoadType\` (\`REFRESH\`, \`PREPEND\`, \`APPEND\`).
3. On \`LoadType.REFRESH\`, clear the old cached items and remote keys atomically.
4. Insert both new articles and updated \`RemoteKeys\` inside \`database.withTransaction { ... }\`.
5. Return \`MediatorResult.Success(endOfPaginationReached = isLastPage)\` or \`MediatorResult.Error(e)\`.`,
      solutionCode: `import androidx.paging.ExperimentalPagingApi
import androidx.paging.LoadType
import androidx.paging.PagingState
import androidx.paging.RemoteMediator
import androidx.room.withTransaction
import java.io.IOException

@OptIn(ExperimentalPagingApi::class)
class NewsRemoteMediator(
    private val api: NewsApiService,
    private val database: AppDatabase
) : RemoteMediator<Int, ArticleEntity>() {

    private val articleDao = database.articleDao()
    private val remoteKeyDao = database.remoteKeyDao()

    override suspend fun initialize(): InitializeAction {
        // Launch refresh if cache is older than 1 hour, else use cached data immediately
        return InitializeAction.LAUNCH_INITIAL_REFRESH
    }

    override suspend fun load(
        loadType: LoadType,
        state: PagingState<Int, ArticleEntity>
    ): MediatorResult {
        return try {
            val page = when (loadType) {
                LoadType.REFRESH -> {
                    val remoteKeys = getRemoteKeyClosestToCurrentPosition(state)
                    remoteKeys?.nextKey?.minus(1) ?: 1
                }
                LoadType.PREPEND -> {
                    val remoteKeys = getRemoteKeyForFirstItem(state)
                    val prevKey = remoteKeys?.prevKey
                        ?: return MediatorResult.Success(endOfPaginationReached = remoteKeys != null)
                    prevKey
                }
                LoadType.APPEND -> {
                    val remoteKeys = getRemoteKeyForLastItem(state)
                    val nextKey = remoteKeys?.nextKey
                        ?: return MediatorResult.Success(endOfPaginationReached = remoteKeys != null)
                    nextKey
                }
            }

            val response = api.fetchArticles(page = page, pageSize = state.config.pageSize)
            val articles = response.items
            val endOfPagination = articles.isEmpty() || response.isLastPage

            database.withTransaction {
                if (loadType == LoadType.REFRESH) {
                    remoteKeyDao.clearRemoteKeys()
                    articleDao.clearAllArticles()
                }

                val prevKey = if (page == 1) null else page - 1
                val nextKey = if (endOfPagination) null else page + 1
                val keys = articles.map { article ->
                    ArticleRemoteKey(articleId = article.id, prevKey = prevKey, nextKey = nextKey)
                }

                remoteKeyDao.insertAll(keys)
                articleDao.insertAll(articles.map { it.toEntity() })
            }

            MediatorResult.Success(endOfPaginationReached = endOfPagination)
        } catch (e: IOException) {
            MediatorResult.Error(e) // Network connectivity failure
        } catch (e: Exception) {
            MediatorResult.Error(e)
        }
    }

    private suspend fun getRemoteKeyForLastItem(state: PagingState<Int, ArticleEntity>): ArticleRemoteKey? {
        return state.pages.lastOrNull { it.data.isNotEmpty() }?.data?.lastOrNull()?.let { article ->
            remoteKeyDao.getRemoteKeyByArticleId(article.id)
        }
    }

    private suspend fun getRemoteKeyForFirstItem(state: PagingState<Int, ArticleEntity>): ArticleRemoteKey? {
        return state.pages.firstOrNull { it.data.isNotEmpty() }?.data?.firstOrNull()?.let { article ->
            remoteKeyDao.getRemoteKeyByArticleId(article.id)
        }
    }

    private suspend fun getRemoteKeyClosestToCurrentPosition(state: PagingState<Int, ArticleEntity>): ArticleRemoteKey? {
        return state.anchorPosition?.let { position ->
            state.closestItemToPosition(position)?.id?.let { id ->
                remoteKeyDao.getRemoteKeyByArticleId(id)
            }
        }
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production
- **Single Source of Truth:** RemoteMediator NEVER pushes data directly to the UI. The UI solely observes \`articleDao.pagingSource()\`. When the database is updated inside \`withTransaction\`, Room automatically notifies PagingSource, triggering smooth UI diffs.
- **Separate RemoteKeys Table:** Managing pagination boundaries in a dedicated table decouples page numbering from entity schemas. This prevents out-of-order writes when network requests return asynchronously.
- **InitializeAction.SKIP_INITIAL_REFRESH:** For apps where offline availability is paramount, \`initialize()\` can inspect cache staleness and skip initial refresh if fresh data already resides on disk.

### ⚠️ Common Production Gotchas & Anti-Patterns
- **Non-Atomic Database Operations:** If articles are inserted without \`withTransaction\`, an error midway leaves orphaned remote keys or missing entities, corrupting endless scroll state.
- **Memory Leaks via PagingData Caching:** Never collect \`Flow<PagingData>\` in GlobalScope or unbound coroutines. Always apply \`.cachedIn(viewModelScope)\` to survive configuration changes without refetching.

### 🎙️ Staff-Level Interview Talking Points
- **Q: "Why Paging 3 instead of a custom RecyclerView onScrollListener?"** -> Paging 3 handles deduplication, in-memory caching with operators, bidirectional boundary prefetching, and seamless error recovery state UI bindings out of the box.`,
      testCases: [
        { name: "Refresh load inserts page 1", input: "LoadType.REFRESH with 20 items", expected: "Clears old cache, inserts 20 items + keys atomically" },
        { name: "Append at end of feed", input: "LoadType.APPEND returns empty list", expected: "MediatorResult.Success(endOfPaginationReached = true)" },
        { name: "Offline network timeout", input: "IOException thrown during fetch", expected: "Returns MediatorResult.Error without database corruption" }
      ]
    },
    {
      id: "challenge-14",
      title: "Real-Time Duplex WebSocket Connection Manager with Coroutines Channel",
      company: "Worktual Innovations & Atlassian",
      difficulty: "Hard (Lead Level)",
      category: "Concurrency & Networking",
      summary: "Architect a resilient WebSocket connection supervisor with Coroutines Channel queuing, ping/pong heartbeats, and exponential jittered reconnection.",
      problemDesc: `Real-time audio signaling, live chat, and collaborative document editing require an uninterrupted duplex WebSocket connection. When network switches (WiFi to LTE) or servers restart, the connection drops silently.

Construct a resilient \`DuplexWebSocketManager\`:
1. Use an outgoing queue backed by Kotlin Coroutines \`Channel<SocketMessage>(Channel.BUFFERED)\`.
2. Implement auto-reconnection with randomized exponential jitter backoff (e.g. 1s, 2s, 4s, 8s + random 0-500ms) to avoid server thundering herds.
3. Maintain an active ping/pong heartbeat watchdog (send ping every 15s; if no pong received within 10s, forcibly cycle the connection).
4. Expose incoming messages via \`SharedFlow<SocketMessage>\` or \`StateFlow<ConnectionState>\`.
5. Ensure zero thread or coroutine leaks upon \`disconnect()\`.`,
      solutionCode: `import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import okhttp3.*
import java.util.concurrent.TimeUnit
import kotlin.random.Random

sealed interface ConnectionState {
    object Disconnected : ConnectionState
    object Connecting : ConnectionState
    object Connected : ConnectionState
    data class Error(val throwable: Throwable) : ConnectionState
}

class DuplexWebSocketManager(
    private val client: OkHttpClient,
    private val socketUrl: String,
    private val coroutineScope: CoroutineScope = CoroutineScope(Dispatchers.IO + SupervisorJob())
) {
    private var webSocket: WebSocket? = null
    private val sendChannel = Channel<String>(capacity = Channel.BUFFERED)
    private val connectionMutex = Mutex()

    private val _connectionState = MutableStateFlow<ConnectionState>(ConnectionState.Disconnected)
    val connectionState: StateFlow<ConnectionState> = _connectionState.asStateFlow()

    private val _incomingMessages = MutableSharedFlow<String>(extraBufferCapacity = 64)
    val incomingMessages: SharedFlow<String> = _incomingMessages.asSharedFlow()

    private var reconnectAttempt = 0
    private var heartbeatJob: Job? = null
    private var consumerJob: Job? = null

    fun connect() {
        coroutineScope.launch {
            connectionMutex.withLock {
                if (_connectionState.value == ConnectionState.Connected || 
                    _connectionState.value == ConnectionState.Connecting) return@launch

                _connectionState.value = ConnectionState.Connecting
                val request = Request.Builder().url(socketUrl).build()

                webSocket = client.newWebSocket(request, object : WebSocketListener() {
                    override fun onOpen(ws: WebSocket, response: Response) {
                        coroutineScope.launch {
                            connectionMutex.withLock {
                                _connectionState.value = ConnectionState.Connected
                                reconnectAttempt = 0
                                startHeartbeat()
                                startMessageConsumer()
                            }
                        }
                    }

                    override fun onMessage(ws: WebSocket, text: String) {
                        coroutineScope.launch { _incomingMessages.emit(text) }
                    }

                    override fun onFailure(ws: WebSocket, t: Throwable, response: Response?) {
                        handleDisconnect(t)
                    }

                    override fun onClosed(ws: WebSocket, code: Int, reason: String) {
                        handleDisconnect(null)
                    }
                })
            }
        }
    }

    suspend fun sendMessage(message: String): Boolean {
        return sendChannel.trySend(message).isSuccess
    }

    private fun startMessageConsumer() {
        consumerJob?.cancel()
        consumerJob = coroutineScope.launch {
            for (msg in sendChannel) {
                webSocket?.send(msg)
            }
        }
    }

    private fun startHeartbeat() {
        heartbeatJob?.cancel()
        heartbeatJob = coroutineScope.launch {
            while (isActive) {
                delay(15_000)
                val sent = webSocket?.send("PING") ?: false
                if (!sent) {
                    handleDisconnect(IllegalStateException("Heartbeat failed"))
                    break
                }
            }
        }
    }

    private fun handleDisconnect(error: Throwable?) {
        coroutineScope.launch {
            connectionMutex.withLock {
                heartbeatJob?.cancel()
                webSocket = null
                _connectionState.value = if (error != null) ConnectionState.Error(error) else ConnectionState.Disconnected

                // Exponential backoff with jitter
                reconnectAttempt++
                val delayBase = (1L shl reconnectAttempt.coerceAtMost(6)) * 1000L
                val jitter = Random.nextLong(100, 600)
                val totalDelay = delayBase + jitter

                delay(totalDelay)
                connect()
            }
        }
    }

    fun disconnect() {
        coroutineScope.launch {
            connectionMutex.withLock {
                heartbeatJob?.cancel()
                consumerJob?.cancel()
                webSocket?.close(1000, "Normal closure")
                webSocket = null
                _connectionState.value = ConnectionState.Disconnected
            }
        }
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production
- **Channel Backpressure Buffering:** Using \`Channel<String>(Channel.BUFFERED)\` decouples calling threads (UI or ViewModel) from socket transport latency. Messages queued while temporarily offline are buffered safely until the socket transitions to Connected.
- **Exponential Jitter:** When an API gateway restarts, thousands of mobile devices attempt reconnection. Adding randomized milliseconds (jitter) flattens traffic spikes, preventing recurring denial-of-service loops on backends.
- **Active Heartbeat Watchdog:** Mobile cellular networks often drop TCP FIN packets during cell tower handovers, leaving sockets half-open. Periodic PING/PONG application frames actively verify link viability.

### ⚠️ Common Production Gotchas & Anti-Patterns
- **Unbounded Buffer Overflows:** An unbounded channel can cause \`OutOfMemoryError\` if the device is offline for hours. Use \`BufferOverflow.DROP_OLDEST\` or persist outgoing messages in Room if delivery guarantees are required.
- **Threading Traps:** OkHttp \`WebSocketListener\` callbacks run on background OkHttp executor threads. Emitting directly to StateFlow or UI state without \`coroutineScope.launch\` can trigger race conditions.

### 🎙️ Staff-Level Interview Talking Points
- **Q: "How do you distinguish user-initiated disconnect from network failure?"** -> Close code 1000 represents intentional closure (e.g. user logged out), where no auto-reconnect occurs. Network exceptions and 1006 abnormal closures immediately trigger the jittered reconnection state machine.`,
      testCases: [
        { name: "Graceful connection & heartbeat", input: "Server accepts socket handshake", expected: "State transitions to Connected; heartbeats run every 15s" },
        { name: "Unsolicited socket drop", input: "Server drops TCP connection", expected: "Exponential jitter backoff triggered and auto-reconnects" },
        { name: "Message queuing while connecting", input: "sendMessage() called before socket ready", expected: "Message buffered in Channel and flushed upon onOpen" }
      ]
    },
    {
      id: "challenge-15",
      title: "High-Throughput SQLite Room WAL Batch Ingestion Buffer",
      company: "Global MNC (Daksh) & PayPal",
      difficulty: "Hard (Lead Level)",
      category: "Performance & Data Storage",
      summary: "Construct a non-blocking high-throughput telemetry event batcher that flushes to Room SQLite using Write-Ahead Logging (WAL).",
      problemDesc: `In high-scale banking, analytics, and IoT mobile applications, background telemetry and audit events arrive at rates exceeding 300+ events per second. Executing individual SQLite insertions triggers massive disk I/O contention, causing UI jank and battery drain.

Construct a production-grade \`HighThroughputEventBatcher\`:
1. Collect telemetry events into an in-memory buffer using Kotlin Flow.
2. Flush events to the Room database when EITHER:
   - Buffer reaches 50 events (batch threshold), OR
   - 2000 milliseconds pass without a flush (time window).
3. Execute batch insertions inside a Room \`@Transaction\` or \`withTransaction { ... }\` leveraging Write-Ahead Logging (WAL) mode.
4. Ensure critical events (e.g. \`EventType.SECURITY_ALERT\`) bypass the buffer for immediate synchronous write.
5. Provide a \`flushAndClose()\` lifecycle hook that drains pending events when the app moves to background.`,
      solutionCode: `import androidx.room.withTransaction
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock

data class TelemetryEvent(
    val id: String,
    val type: String,
    val payload: String,
    val timestamp: Long = System.currentTimeMillis(),
    val isCritical: Boolean = false
)

class HighThroughputEventBatcher(
    private val database: AppDatabase,
    private val coroutineScope: CoroutineScope = CoroutineScope(Dispatchers.IO + SupervisorJob()),
    private val batchSize: Int = 50,
    private val flushIntervalMs: Long = 2000L
) {
    private val eventChannel = Channel<TelemetryEvent>(capacity = 1000)
    private val flushMutex = Mutex()
    private var workerJob: Job? = null

    init {
        startBatchCollector()
    }

    fun logEvent(event: TelemetryEvent) {
        if (event.isCritical) {
            // Immediate write for critical security / audit events
            coroutineScope.launch {
                flushMutex.withLock {
                    database.withTransaction {
                        database.telemetryDao().insert(event.toEntity())
                    }
                }
            }
        } else {
            // Non-blocking queue insertion
            eventChannel.trySend(event)
        }
    }

    private fun startBatchCollector() {
        workerJob = coroutineScope.launch {
            val buffer = ArrayList<TelemetryEvent>(batchSize)
            var lastFlushTime = System.currentTimeMillis()

            while (isActive) {
                // Poll channel with timeout to respect flushIntervalMs
                val event = withTimeoutOrNull(flushIntervalMs) {
                    eventChannel.receive()
                }

                if (event != null) {
                    buffer.add(event)
                }

                val now = System.currentTimeMillis()
                val shouldFlush = buffer.size >= batchSize || 
                    (buffer.isNotEmpty() && (now - lastFlushTime) >= flushIntervalMs)

                if (shouldFlush) {
                    flushBuffer(buffer)
                    buffer.clear()
                    lastFlushTime = now
                }
            }
        }
    }

    private suspend fun flushBuffer(events: List<TelemetryEvent>) {
        if (events.isEmpty()) return
        flushMutex.withLock {
            database.withTransaction {
                val entities = events.map { it.toEntity() }
                database.telemetryDao().insertAll(entities)
            }
        }
    }

    suspend fun flushAndClose() {
        workerJob?.cancelAndJoin()
        // Drain remaining items from the channel
        val remaining = mutableListOf<TelemetryEvent>()
        while (true) {
            val event = eventChannel.tryReceive().getOrNull() ?: break
            remaining.add(event)
        }
        flushBuffer(remaining)
    }
}`,
      explanation: `### 💡 Core Architectural Concepts in Production
- **SQLite Write-Ahead Logging (WAL):** By default, SQLite blocks readers when a write is in progress. Enabling WAL (\`Room.databaseBuilder(...).setJournalMode(JournalMode.WRITE_AHEAD_LOGGING)\`) allows readers to concurrently query the database while background threads append to the WAL journal.
- **Batching Disk Fsyncs:** Each SQLite transaction triggers a disk filesystem sync (\`fsync\`). 50 separate inserts cause 50 expensive disk writes. Wrapping 50 inserts in a single \`withTransaction\` requires exactly ONE \`fsync\`, boosting throughput by over 40x.
- **Channel trySend vs suspend:** Telemetry logging must NEVER suspend or block the caller. \`trySend()\` returns immediately. If the buffer is full, excess telemetry is safely dropped rather than degrading app performance.

### ⚠️ Common Production Gotchas & Anti-Patterns
- **Logging Telemetry on the Main Thread:** Inserting into Room or parsing JSON payloads on Dispatchers.Main leads directly to frame drops and ANR dialogs.
- **Ignoring App Termination:** If the process is killed while events sit in the in-memory channel, data is lost. Register an \`AppLifecycleObserver\` to call \`flushAndClose()\` inside \`ON_STOP\`.

### 🎙️ Staff-Level Interview Talking Points
- **Q: "Why not use WorkManager for every single telemetry event?"** -> WorkManager is designed for tasks with minimum latency in minutes, writing job metadata to SQLite for every request. Invoking WorkManager 300 times per second would thrash the device disk and grind the app to a halt.`,
      testCases: [
        { name: "Batch size trigger", input: "50 events pushed rapidly", expected: "Flushes single batch transaction to Room immediately" },
        { name: "Time window trigger", input: "10 events pushed, then 2000ms idle", expected: "Flushes 10 events after 2000ms timeout" },
        { name: "Critical event bypass", input: "Security event with isCritical = true", expected: "Writes to Room synchronously without queue delay" }
      ]
    }
  ],

  systemDesigns: [
    {
      id: "hld-atlassian",
      title: "Offline-First Mobile Issue Tracker (Jira Architecture)",
      company: "Atlassian",
      difficulty: "Staff / Principal Level",
      overview: "Architect an offline-first issue tracker handling instant user edits, offline queued operations, and collaborative conflict resolution.",
      diagram: `
+-------------------------------------------------------------+
|                     PRESENTATION LAYER                       |
|   Jetpack Compose UI  <--- StateFlow ---  ViewModel         |
+------------------------------+------------------------------+
                               | UDF Actions
                               v
+-------------------------------------------------------------+
|                        DOMAIN LAYER                         |
|   Use Cases: SyncIssueUseCase, UpdateStatusOptimistic       |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                      REPOSITORY LAYER                       |
|              IssueRepositoryImpl (SSOT Coordinator)         |
+---------------+-----------------------------+---------------+
                | Read / Optimistic Write     | Background Sync
                v                             v
+-----------------------------+ +-----------------------------+
|       LOCAL STORAGE         | |       NETWORK SYNC          |
|  Room SQLite DB             | |  WorkManager (Periodic/Exp) |
|  - issues (active cache)    | |  OkHttp + Retrofit          |
|  - pending_actions (queue)  | |  WebSocket (Real-Time Push) |
+-----------------------------+ +-----------------------------+
      `,
      keyComponents: [
        { name: "Optimistic UI Update", desc: "When the user edits an issue status, update Room immediately with a 'SYNCING' badge and emit to Compose. Never wait for network." },
        { name: "Pending Action Mutation Queue", desc: "Every mutation is appended to an SQLite 'pending_actions' table with idempotency key, timestamp, and payload." },
        { name: "Conflict Resolution Strategy", desc: "Last-Write-Wins (LWW) with server timestamp comparison; for rich-text descriptions, 3-way merge or diff-patch matching." },
        { name: "Sync Engine", desc: "Triggered on: 1) App launch, 2) Network reconnect via ConnectivityManager, 3) WebSocket invalidate payload, 4) Periodic WorkManager." }
      ]
    },
    {
      id: "hld-worktual",
      title: "Real-Time VoIP & WebRTC Calling Architecture",
      company: "Worktual Innovations",
      difficulty: "Staff / Specialist Level",
      overview: "End-to-end architecture for low-latency voice/video calling handling Android 14+ background execution constraints and network handovers.",
      diagram: `
+-------------------------------------------------------------+
|                    SYSTEM FRAMEWORK APIs                    |
|   TelecomManager / ConnectionService (Native Call UI)        |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                   CALL MANAGEMENT ENGINE                    |
|  CallStateController (IDLE, RINGING, CONNECTING, ACTIVE)    |
|  ForegroundService (MICROPHONE & PHONE_CALL types)          |
+---------------+-----------------------------+---------------+
                | Signaling                   | Media Pipeline
                v                             v
+-----------------------------+ +-----------------------------+
|      SIGNALING LAYER        | |        MEDIA ENGINE         |
|  WebSocket / SIP Client     | |  WebRTC PeerConnection      |
|  - Call invite / SDP offer  | |  - AudioTrack / VideoTrack  |
|  - ICE candidates exchange  | |  - Jitter Buffer / Echo Canc|
+-----------------------------+ +-----------------------------+
      `,
      keyComponents: [
        { name: "Android 14+ Foreground Service", desc: "ForegroundService configured strictly with android:foregroundServiceType='microphone|phoneCall' to avoid OS termination." },
        { name: "TelecomManager ConnectionService", desc: "Integrates with native phone dialer for lock-screen incoming call UI and car Bluetooth (Android Auto) integration." },
        { name: "Seamless Network Handover", desc: "Observes ConnectivityManager NetworkCallback; triggers WebRTC ICE restart on default network change (WiFi to Cellular)." }
      ]
    },
    {
      id: "hld-tcs",
      title: "Zero-Downtime Legacy XML to Jetpack Compose Migration",
      company: "Tata Consultancy Services (TCS)",
      difficulty: "Lead / Architect Level",
      overview: "Architectural strategy for migrating a monolithic 15-module banking codebase from Java/XML to 100% Kotlin & Compose with zero regression.",
      diagram: `
+-------------------------------------------------------------+
|                     LEGACY JAVA / XML                       |
|           Monolithic Activities & Fragment Stack            |
+------------------------------+------------------------------+
                               | Step 1: Wrap in ComposeView
                               v
+-------------------------------------------------------------+
|                   HYBRID INTEROP BOUNDARY                   |
|   ComposeView in XML  <---->  AndroidView in Compose        |
|   ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed|
+------------------------------+------------------------------+
                               | Step 2: Extract ViewModel & UDF
                               v
+-------------------------------------------------------------+
|                   MODERN DECLARATIVE CORE                   |
|   Pure Jetpack Compose Screens  +  Navigation Compose       |
|   StateFlow  <--  Hilt ViewModels  <--  Clean Architecture   |
+-------------------------------------------------------------+
      `,
      keyComponents: [
        { name: "ViewCompositionStrategy", desc: "Explicitly configure ComposeView.setViewCompositionStrategy(DisposeOnViewTreeLifecycleDestroyed) to avoid memory leaks in Fragments." },
        { name: "Bottom-Up Migration", desc: "Begin with leaf components (Buttons, Cards, List Items), then full screen tabs, and finally replace the Fragment navigation stack." },
        { name: "Shared Design System", desc: "Mirror legacy XML styling (Theme.AppCompat) into Material 3 Compose ColorScheme & Typography to ensure visual parity during hybrid phases." }
      ]
    }
,
    {
      id: "hld-paypal",
      title: "High-Security Idempotent Payment & Checkout SDK Architecture",
      company: "PayPal",
      difficulty: "Staff / Principal Level",
      overview: "Architect an enterprise mobile payment checkout SDK with biometric authentication, hardware-backed cryptography, network idempotency, and tamper detection.",
      diagram: `
+-------------------------------------------------------------+
|                     HOST APPLICATION                        |
|  Merchant App  ---> CheckoutSdk.startPayment(PaymentRequest)|
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                 PAYMENT ORCHESTRATION LAYER                 |
|  CheckoutEngine (State Machine: INIT, AUTH, CAPTURE, VERIFY)|
|  BiometricAuthManager (BiometricPrompt + Cipher Object)     |
+---------------+-----------------------------+---------------+
                | Crypto Operations           | Secure Transport
                v                             v
+-----------------------------+ +-----------------------------+
|    SECURITY SUBSYSTEM       | |   IDEMPOTENT API GATEWAY    |
|  Android KeyStore           | |  OkHttp Interceptors        |
|  - StrongBox / TEE KeyPair  | |  - X-Idempotency-Key (UUID) |
|  - AES-256-GCM Payload Enc  | |  - SSL Pinning (HPKP / SHA) |
|  - Attestation / Root Guard | |  - Offline Mutation Queue   |
+-----------------------------+ +-----------------------------+
      `,
      keyComponents: [
        { name: "Hardware-Backed KeyStore (StrongBox)", desc: "Generates private keys inside the Hardware Security Module (StrongBox Keymaster) requiring user biometric authentication for key retrieval." },
        { name: "Idempotency Token Manager", desc: "Assigns a deterministic UUIDv4 idempotency key per checkout attempt, preventing duplicate payment charges during transient network disconnects or app restarts." },
        { name: "Certificate Pinning & Anti-Tampering", desc: "Enforces OkHttp certificatePinner with backup public key hashes and detects rooted devices (SafetyNet/Play Integrity API) before initiating payment." }
      ]
    },
    {
      id: "hld-tataelxsi",
      title: "High-Performance Media Player & Adaptive Video Streaming Engine",
      company: "Tata Elxsi",
      difficulty: "Staff / Specialist Level",
      overview: "Architect an end-to-end adaptive bitrate (ABR) OTT media player engine supporting ExoPlayer/Media3, Widevine DRM licensing, offline downloads, and background PiP.",
      diagram: `
+-------------------------------------------------------------+
|                     PRESENTATION LAYER                       |
|   Compose PlayerView (SurfaceView)  <--->  MediaControls    |
+------------------------------+------------------------------+
                               | Player Commands
                               v
+-------------------------------------------------------------+
|                 MEDIA3 PLAYER CORE ENGINE                   |
|  ExoPlayer Instance  +  DefaultTrackSelector (ABR Rule)     |
|  MediaSession / MediaBrowserService (Background & PiP)      |
+---------------+-----------------------------+---------------+
                | DRM License Exchange        | Media Chunk Feeder
                v                             v
+-----------------------------+ +-----------------------------+
|       DRM SUBSYSTEM         | |     CACHING & NETWORK       |
|  Widevine Modular DRM       | |  SimpleCache (LRU Disk)     |
|  - DrmSessionManager        | |  - Chunked HLS / DASH Seg   |
|  - MediaDrmCallback         | |  - BandwidthMeter (Throughput|
+-----------------------------+ +-----------------------------+
      `,
      keyComponents: [
        { name: "Media3 / ExoPlayer SurfaceView Rendering", desc: "Uses SurfaceView over TextureView to eliminate extra compositing passes, achieving 60FPS 4K playback and reducing GPU power consumption by 30%." },
        { name: "Adaptive Bitrate (ABR) BandwidthMeter", desc: "Dynamically measures network throughput across packet chunks to switch HLS/DASH video rendition profiles smoothly without playback rebuffering." },
        { name: "Widevine DRM & Offline Storage", desc: "Integrates DrmSessionManager to fetch and renew Widevine modular licenses, caching encrypted video segments to disk via SimpleCache for offline playback." }
      ]
    }    ,
    {
      id: "hld-messaging",
      title: "Global-Scale Real-Time Messaging & Chat Architecture (WhatsApp / Slack Mobile Engine)",
      company: "Worktual & Global MNC",
      difficulty: "Staff / Principal Level",
      overview: "Architect a fault-tolerant, end-to-end encrypted real-time chat mobile engine supporting 100M+ active users, offline queuing, bidirectional sync, and instant delivery receipts.",
      diagram: `
+-------------------------------------------------------------+
|                     PRESENTATION LAYER                       |
|   Jetpack Compose UI (LazyColumn / Flow) <--- StateFlow     |
+------------------------------+------------------------------+
                               | UDF Messages / Actions
                               v
+-------------------------------------------------------------+
|                      DOMAIN CONTROLLER                       |
|     MessageSyncCoordinator & State Machine Manager           |
+--------------+-------------------------------+--------------+
               |                               |
               v                               v
+-----------------------------+ +-----------------------------+
|        LOCAL STORAGE        | |      NETWORK ENGINE         |
|  Room SQLite (WAL Mode)     | |  Duplex WebSocket Gateway   |
|  - Messages (Pending/Sent)  | |  - Heartbeat Watchdog       |
|  - Conversations & Contacts | |  - FCM Silent Sync Fallback |
|  - Offline Outbox Queue     | |  - Resumable Media Upload   |
+-----------------------------+ +-----------------------------+
               ^                               ^
               |               Sync            |
               +-------------------------------+
`,
      keyComponents: [
        { name: "4-State Message Machine", desc: "Tracks each message state: PENDING_SEND (clock), SENT_TO_SERVER (single tick), DELIVERED_TO_DEVICE (double grey tick), READ_BY_RECIPIENT (blue tick)." },
        { name: "Duplex WebSocket Transport", desc: "Long-lived multiplexed TCP socket handling chat message payloads, typing indicators, and presence updates with zero polling overhead." },
        { name: "Local SQLite WAL as Single Source of Truth", desc: "UI only renders items directly emitted by Room database Flow. Outgoing messages are persisted locally first before network dispatch." },
        { name: "End-to-End Encryption (E2EE)", desc: "Implements Signal Protocol double-ratchet session encryption using local hardware Keystore keys, encrypting messages before leaving the device." },
        { name: "Resumable Chunked Media Engine", desc: "Uploads large videos and images in 512KB chunks with SHA-256 validation, enabling transparent upload resumes across cellular dropouts." },
        { name: "FCM Push Notification Wakeup", desc: "When the app is killed, incoming FCM high-priority data payloads trigger background sync or push notifications without waking full UI." }
      ]
    },
    {
      id: "hld-rideshare",
      title: "Real-Time Driver Geolocation & Dispatch Telemetry Engine (Uber / Grab Mobile Architecture)",
      company: "Swits Digital & Mobility Track",
      difficulty: "Staff Mobile Architect",
      overview: "Design a high-frequency location tracking and map rendering subsystem for a driver/rider dispatch mobile platform operating under strict Android 14/15 battery and foreground constraints.",
      diagram: `
+-------------------------------------------------------------+
|                   HARDWARE LOCATION LAYER                    |
|   FusedLocationProviderClient (GPS + WiFi + Cellular)       |
+------------------------------+------------------------------+
                               | Raw Coordinates (1Hz)
                               v
+-------------------------------------------------------------+
|                   SENSOR FUSION & FILTERING                  |
|   Kalman Filter Smoothing & Dead Reckoning (Gyro/Accel)      |
+------------------------------+------------------------------+
                               | Clean Coordinates & Bearing
                               v
+-------------------------------------------------------------+
|                     DISPATCH COORDINATOR                     |
|  - Geohash Proximity Calculation                            |
|  - Android 14+ FGS Location Notification Controller         |
+--------------+-------------------------------+--------------+
               |                               |
               v                               v
+-----------------------------+ +-----------------------------+
|        MAP RENDERING        | |     TELEMETRY DISPATCH      |
|  Hardware Vector Surface    | |  WebSocket Telemetry Queue  |
|  Marker Smooth Interpolator | |  - Exponential Backoff Sync |
|  Snapping to Road Network   | |  - Network Loss Ring Buffer |
+-----------------------------+ +-----------------------------+
`,
      keyComponents: [
        { name: "Adaptive Location Provider", desc: "Uses FusedLocationProviderClient with dynamic intervals: 1s updates when moving > 20km/h, backing off to 15s when vehicle is stationary." },
        { name: "Kalman Filter & Dead Reckoning", desc: "Smooths erratic GPS jumps in urban canyons (between tall buildings) by fusing accelerometer and gyroscope readings with road network vectors." },
        { name: "Android 14+ Location FGS Constraints", desc: "Implements strict foregroundServiceType='location' with required runtime permissions (ACCESS_FINE_LOCATION, FOREGROUND_SERVICE_LOCATION)." },
        { name: "Smooth Marker Interpolation", desc: "Computes spherical spline interpolation (lerp) on the render thread so driver vehicle icons glide fluidly across turns without jumping." },
        { name: "Offline Geolocation Ring Buffer", desc: "Buffers up to 500 GPS coordinate points in a circular memory queue during tunnel transits, flushing in a single compressed batch upon reconnect." }
      ]
    },
    {
      id: "hld-superapp",
      title: "Dynamic Modular Architecture & Micro-Apps Super-App Platform",
      company: "TCS & Enterprise Modernizers",
      difficulty: "Principal Mobile Architect",
      overview: "Architect an enterprise super-app platform enabling 20+ independent product squads to build, test, and dynamically deploy independent feature modules without merge conflicts or monolithic bloat.",
      diagram: `
+-------------------------------------------------------------+
|                       BASE APP SHELL                         |
|   Root Navigator, Design System & Core Dependency Graph      |
+------------------------------+------------------------------+
                               | Dynamic Feature Delivery
         +---------------------+---------------------+
         |                                           |
         v                                           v
+-----------------------------+             +-----------------------------+
|     FEATURE MODULE: PAY     |             |    FEATURE MODULE: RETAIL   |
|  - Isolated Hilt Component  |             |  - Isolated Hilt Component  |
|  - Own Room Tables & Repos  |             |  - Own Room Tables & Repos  |
|  - Downloaded On-Demand     |             |  - Downloaded On-Demand     |
+--------------+--------------+             +--------------+--------------+
               |                                           |
               +---------------------+---------------------+
                                     v
+-------------------------------------------------------------+
|                  CORE FOUNDATION LIBRARIES                   |
|   :core:network  |  :core:database  |  :core:navigation-api |
+-------------------------------------------------------------+
`,
      keyComponents: [
        { name: "Play Feature Delivery (DFMs)", desc: "Splits 150MB monolith into lean 25MB base APK with auxiliary features downloaded dynamically over-the-air only when user taps feature." },
        { name: "Decoupled Contract Router Registry", desc: "Modules communicate strictly via abstract interface contracts (:navigation-api) with zero direct compile-time classpath dependencies between features." },
        { name: "Hierarchical Dagger/Hilt Subgraphs", desc: "Base application component exposes foundational singletons (OkHttpClient, KeyStore); feature subcomponents create and dispose feature scopes dynamically." },
        { name: "Isolated Crash Circuit Breaker", desc: "If an on-demand micro-app crashes, an uncaught exception boundary isolates the fault, offering a graceful reset without crashing the host super-app." },
        { name: "Server-Driven Feature Flagging", desc: "Dynamic configuration engine switches feature entry points, runs staged A/B rollouts, and performs instant remote kill-switches if bugs emerge." }
      ]
    }
  ],

  quizQuestions: [
    {
      id: "q1",
      question: "In Kotlin Coroutines, what happens if an exception is thrown inside a child coroutine launched with 'launch' under a normal Job?",
      options: [
        "The exception is silently ignored unless caught.",
        "The child cancels its parent, which in turn cancels all sibling coroutines.",
        "Only the child coroutine is cancelled; siblings continue running.",
        "The parent catches the exception in a standard try/catch block."
      ],
      correctIndex: 1,
      explanation: "In standard structured concurrency with a regular 'Job', child failure propagates upwards and cancels the parent Job, which subsequently cancels all its other children. To isolate child failures, use a 'SupervisorJob' or 'supervisorScope'."
    },
    {
      id: "q2",
      question: "Why should you use 'derivedStateOf' in Jetpack Compose?",
      options: [
        "To perform asynchronous network calls inside a Composable function.",
        "To reduce recompositions when a state changes more frequently than the UI needs to update (e.g. scroll offset > 0).",
        "To persist state across process death.",
        "To inject dependencies directly into Composable functions."
      ],
      correctIndex: 1,
      explanation: "'derivedStateOf' recalculates only when its dependent states change, but only triggers recomposition if the derived calculation result actually changes. Excellent for scroll thresholds: offset changes on every pixel, but 'offset > 100' only changes boolean once."
    },
    {
      id: "q3",
      question: "On Android 14 (API 34) and higher, what mandatory requirement applies to all Foreground Services?",
      options: [
        "They must terminate within 10 minutes of app backgrounding.",
        "They must declare explicit 'foregroundServiceType' attributes in both the AndroidManifest and at startForeground() invocation.",
        "They are no longer allowed to play audio in the background.",
        "They must be replaced entirely with WorkManager."
      ],
      correctIndex: 1,
      explanation: "Android 14 mandates that every Foreground Service must declare at least one specific 'foregroundServiceType' (e.g., 'camera', 'microphone', 'mediaPlayback', 'dataSync') in AndroidManifest.xml and pass that matching type into 'Service.startForeground()'."
    },
    {
      id: "q4",
      question: "What is the primary difference between Cold Flows and Hot Flows (SharedFlow/StateFlow) in Kotlin?",
      options: [
        "Cold flows only execute on the Main dispatcher; Hot flows execute on Dispatchers.IO.",
        "Cold flows only produce values when collected; Hot flows produce values independently of active subscribers.",
        "Cold flows can hold multiple values; Hot flows can only hold a single value.",
        "Hot flows cannot be used in Jetpack Compose."
      ],
      correctIndex: 1,
      explanation: "A Cold Flow executes its producer block on-demand for every individual collector. A Hot Flow (like StateFlow or SharedFlow) maintains its stream state active in memory regardless of whether there are currently active collectors."
    },
    {
      id: "q5",
      question: "How does Android ART (Android Runtime) achieve fast app startup times using Cloud Profiles and Baseline Profiles?",
      options: [
        "By interpreting DEX bytecode on the fly without ever compiling to machine code.",
        "By pre-compiling critical user-journey code paths to native AOT machine code ahead of installation or first launch.",
        "By stripping out all unused classes at runtime using reflection.",
        "By running the application in a sandboxed WebAssembly VM."
      ],
      correctIndex: 1,
      explanation: "Baseline Profiles specify critical code paths (app startup, first screen render, scrolling) so ART pre-compiles them ahead-of-time (AOT) to native machine code, eliminating JIT compilation pauses and drastically reducing cold start time."
    },
    {
      id: "q6",
      question: "What causes a memory leak when using Coroutines in an Android ViewModel if an unconfined or GlobalScope is used?",
      options: [
        "Coroutines cannot be garbage collected if they are paused.",
        "The coroutine remains active after the ViewModel is cleared, holding references to context, views, or ViewModels.",
        "GlobalScope automatically clears all child references.",
        "Kotlin Coroutines do not run on the Android JVM heap."
      ],
      correctIndex: 1,
      explanation: "'GlobalScope' launches top-level coroutines tied to the application lifetime. If it captures references to a ViewModel or Activity, they cannot be garbage collected when destroyed. Always use 'viewModelScope' which is automatically cancelled in 'onCleared()'."
    }
,
    {
      id: "q7",
      question: "In Android security, what is the key advantage of using StrongBox Keymaster over the standard TEE (Trusted Execution Environment) for cryptographic keys?",
      options: [
        "StrongBox executes encryption on the cloud rather than on-device.",
        "StrongBox uses dedicated hardware (a separate CPU, memory, and secure flash) physically isolated from the main processor.",
        "StrongBox allows private keys to be exported and inspected by unit tests.",
        "StrongBox supports unlimited key storage compared to TEE."
      ],
      correctIndex: 1,
      explanation: "StrongBox Keymaster operates on a physically distinct hardware chip (with dedicated CPU, secure RAM, and tamper-resistant flash storage), providing hardware-level resilience against side-channel and physical snooping attacks, whereas standard TEE shares CPU cycles with the host OS."
    },
    {
      id: "q8",
      question: "Why is SurfaceView preferred over TextureView for high-resolution video playback in Android ExoPlayer applications?",
      options: [
        "SurfaceView supports CSS opacity and rotation animations, whereas TextureView does not.",
        "SurfaceView composites its content directly to the hardware display subsystem (SurfaceFlinger) in a dedicated window layer, bypassing the View hierarchy and saving memory bandwidth.",
        "TextureView does not support hardware acceleration on Android 10+.",
        "SurfaceView cannot be used with Jetpack Compose."
      ],
      correctIndex: 1,
      explanation: "SurfaceView punches a hole directly through the window to a dedicated surface composited directly by SurfaceFlinger, saving GPU bandwidth and power. TextureView behaves as a regular View in the hierarchy (requiring an extra OpenGL composition step), which introduces 1-3 frames of latency and higher battery drain."
    }    ,
    {
      id: "q9",
      question: "Android 15 introduces support for 16 KB memory page sizes (up from 4 KB). What is the primary impact on Android application development?",
      options: [
        "Pure Kotlin and Java applications with no native code automatically fail to run.",
        "Apps that use C/C++ native shared libraries (.so files) must recompile and align ELF segments to 16 KB boundaries, or they will crash upon launch on 16 KB devices.",
        "Jetpack Compose composables will consume 4x more GPU memory.",
        "Room database files cannot exceed 16 KB in total size."
      ],
      correctIndex: 1,
      explanation: "While pure Java/Kotlin code is unaffected, native C/C++ libraries (such as game engines, custom cryptography, or media codecs) compiled with 4 KB ELF page alignment fail to load on Android 15 devices configured with 16 KB pages. Developers must recompile native code with 16 KB page alignment using modern NDK r27+."
    },
    {
      id: "q10",
      question: "Why does passing large data models (e.g. detailed bitmap or list of 1,000 items) via Intent extras or SavedStateHandle cause a TransactionTooLargeException crash?",
      options: [
        "Android OS limits all Intent extras to 16 bytes.",
        "The Binder IPC transaction buffer is shared across all ongoing IPC transactions for the entire process and has a strict maximum size limit of approximately 1 MB.",
        "SavedStateHandle writes directly to read-only hardware ROM.",
        "Kotlin data classes cannot be serialized to Parcelable."
      ],
      correctIndex: 1,
      explanation: "The Android Binder kernel buffer has a hard cap of approximately 1 MB shared across the whole process for all concurrent Binder calls. Exceeding this limit throws TransactionTooLargeException. Best practice is to store large datasets in Room SQLite or disk cache and pass only unique IDs in Intent/SavedStateHandle."
    },
    {
      id: "q11",
      question: "In Jetpack Compose, how does mutableStateOf(value, policy) behave when configured with 'neverEqualPolicy()'?",
      options: [
        "It treats all values as equal and permanently suppresses recomposition.",
        "Every write to the state object is treated as an update, triggering recomposition even if the new value is identical to the current value.",
        "It crashes the Compose runtime if assigned twice.",
        "It only triggers recomposition when value is null."
      ],
      correctIndex: 1,
      explanation: "By default, mutableStateOf uses 'structuralEqualityPolicy()' which compares values using .equals(). Setting 'neverEqualPolicy()' instructs the Compose snapshot engine to always treat assignments as mutations, triggering recomposition whenever the setter is invoked, even with the identical instance."
    },
    {
      id: "q12",
      question: "What is the primary difference between Coroutines 'Dispatchers.Default' and 'Dispatchers.IO' in Kotlin Coroutines on Android?",
      options: [
        "Dispatchers.IO runs on the Android main thread, whereas Dispatchers.Default runs on background threads.",
        "Dispatchers.Default is limited to the number of available CPU cores (at least 2) for CPU-bound computations; Dispatchers.IO is an elastic pool (up to 64 threads or core count) designed for blocking I/O.",
        "Dispatchers.IO cannot execute network calls.",
        "Dispatchers.Default does not support cancellation."
      ],
      correctIndex: 1,
      explanation: "Dispatchers.Default is tuned for CPU-intensive tasks (sorting, JSON parsing, crypto) and caps its thread pool to the number of CPU cores to avoid context-switching overhead. Dispatchers.IO is designed for blocking calls (disk, SQLite, network) and can grow up to 64 threads, sharing threads with Default."
    },
    {
      id: "q13",
      question: "How do Android App Links provide superior security over standard Custom URL Schemes (e.g. 'myapp://path') for deep linking?",
      options: [
        "App Links require users to enter a biometric password before opening.",
        "App Links require cryptographic digital asset verification (assetlinks.json hosted on the HTTPS domain), allowing the OS to verify domain ownership and prevent other apps from hijacking the URL.",
        "Custom URL Schemes cannot pass query parameters.",
        "App Links can only be opened when the device is in airplane mode."
      ],
      correctIndex: 1,
      explanation: "Custom URL Schemes allow any rogue app to declare the same scheme in their manifest, creating deep link ambiguity or interception. Android App Links verify domain ownership via a cryptographically signed assetlinks.json file hosted on the website's HTTPS domain, allowing Android to open the verified app directly without a disambiguation dialog."
    },
    {
      id: "q14",
      question: "When ProGuard / R8 full mode is enabled for a release build, why do JSON deserializers like Moshi or Gson frequently throw NullPointerException on Kotlin non-null fields?",
      options: [
        "R8 deletes all JSON files from the device storage.",
        "R8 obfuscates or removes class field names and default constructors unless preserved via @Keep or ProGuard rules, causing reflection to fail or instantiate fields as null via Unsafe.",
        "Kotlin Coroutines disable R8 in release builds.",
        "Android ART does not support JSON serialization."
      ],
      correctIndex: 1,
      explanation: "R8 shrinks, renames, and merges fields and constructors during optimization. If data classes parsed via reflection are not annotated with @Keep or preserved via -keepclassmembers, field names are renamed (e.g. to 'a', 'b'), preventing JSON keys from matching and causing fields to remain null or throw exceptions."
    },
    {
      id: "q15",
      question: "Why can an Android application crash with an 'OutOfMemoryError' (OOM) even when the Android Studio Memory Profiler shows Dalvik/ART heap usage is well below the maximum limit?",
      options: [
        "Dalvik heap memory is only used for XML layout files.",
        "OOM can occur due to virtual address space exhaustion in 32-bit processes, native memory exhaustion (e.g. C++ allocations, Bitmaps in native memory), or inability to allocate a contiguous block due to memory fragmentation.",
        "Android terminates apps with OOM whenever battery is below 15%.",
        "The OS reserves 90% of heap exclusively for system broadcasts."
      ],
      correctIndex: 1,
      explanation: "An OutOfMemoryError is thrown whenever the system cannot satisfy an allocation request. This happens not only when Java heap is full, but also when native memory (C++ allocations, OpenGL textures) is exhausted, when virtual address space is depleted, or when severe heap fragmentation prevents finding a contiguous memory block for a large allocation."
    },
    {
      id: "q16",
      question: "What is the primary performance overhead of Jetpack Compose 'SubcomposeLayout' compared to a standard 'Layout'?",
      options: [
        "SubcomposeLayout runs all composables on a background thread.",
        "SubcomposeLayout defers the composition of sub-trees until the measurement pass, breaking single-pass layout guarantees and incurring extra composition overhead.",
        "SubcomposeLayout cannot be used with animations.",
        "SubcomposeLayout disables hardware acceleration."
      ],
      correctIndex: 1,
      explanation: "Standard 'Layout' composes all children upfront and measures them in a single O(N) pass. 'SubcomposeLayout' allows composing children dynamically during the measurement pass (necessary for Lazy lists to only compose visible items), but this introduces re-entrancy into the composition runtime and incurs measurable CPU overhead if misused for static layouts."
    }
  ]
};

// Expose globally
window.APP_DATA = APP_DATA;
