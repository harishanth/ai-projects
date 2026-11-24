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
  ]
};

// Expose globally
window.APP_DATA = APP_DATA;
