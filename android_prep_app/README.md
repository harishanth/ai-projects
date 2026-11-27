# 🤖 Android Lead & Staff Interview Prep Studio

An interactive technical interview preparation hub tailored for **Senior Android Developers**, **Android Tech Leads**, and **Staff Mobile Engineers** (10–11 Years Experience). Grounded in real-time hiring criteria and active job tracking across Chennai and Remote markets.

🔗 **Live GitHub Pages App:** [https://harishanth.github.io/ai-projects/](https://harishanth.github.io/ai-projects/)  
📁 **GitHub Repository:** [https://github.com/harishanth/ai-projects](https://github.com/harishanth/ai-projects)  
📊 **Live Naukri Google Sheet Tracker:** [Google Sheet Link](https://docs.google.com/spreadsheets/d/1YkA9gZH8PYWQV1GyPNQLYX9Eh6oAXiYPw1uWs2oLaDw/edit)

---

## 🚀 Key Features

1. **🏢 Company Intelligence & Pipelines (14 Tracked Companies)**
   - Granular round-by-round breakdown (Live Coding, System Design HLD, LLD Architecture, Values & Fitment).
   - Core tech stack requirements, evaluation criteria, and compensation benchmarks.
   - Covering top-tier product GCCs (PayPal, Atlassian), enterprise modernizers (TCS, HCLTech), media specialists (Tata Elxsi, Worktual), and digital consultants (Bounteous, Photon).

2. **💻 Production-Grade Coding Arena (15 Real-World Challenges)**
   - Real-world production engineering challenges testing high concurrency, state management, background processing, and lifecycle edge-cases.
   - Complete production-grade Kotlin implementations with inline error handling, structured concurrency, and memory management.
   - Architectural deep dives, critical production gotchas, and staff-level interview defense talking points.
   - Covering: Concurrency Token Refresh, Compose State Stability, Offline-First Sync Repository, Audio Ring Buffers, Dynamic Feature Modules, BLE Sensor Backpressure, Hardware Keystore AES-GCM, XML-to-Compose Interop, KMP MVI Store, LRU Bitmap Cache, WorkManager Expedited Sync, Custom Compose Masonry Layout, Paging 3 RemoteMediator, Duplex WebSocket Manager, and Room WAL Batch Ingestion.

3. **🏛️ Mobile System Design Studio (8 End-to-End Blueprints)**
   - **Offline-First Issue Tracker (Atlassian / Jira)**: Optimistic UI, Room mutation queue, and conflict resolution.
   - **Real-Time VoIP & WebRTC Calling Subsystem (Worktual)**: Android 14/15 FGS constraints, ConnectionService, and ICE network handovers.
   - **Zero-Downtime Compose Modernization (TCS)**: Hybrid interop boundaries, ViewCompositionStrategy, and atomic design systems.
   - **High-Security Idempotent Payment SDK (PayPal)**: Hardware StrongBox Keymaster, biometric crypto verification, and token idempotency.
   - **Adaptive OTT Media Player Engine (Tata Elxsi)**: Media3 / ExoPlayer SurfaceView rendering, Widevine DRM, and ABR streaming.
   - **Global-Scale Real-Time Messaging Engine (WhatsApp / Slack Mobile)**: Duplex WebSocket, 4-state receipt machine, SQLite WAL, E2EE, and resumable media upload.
   - **Real-Time Driver Geolocation & Dispatch Telemetry (Uber / Grab Mobile)**: FusedLocation adaptive sampling, Kalman filter GPS smoothing, FGS location type, and map spline interpolation.
   - **Dynamic Modular Architecture & Micro-Apps Super-App (Grab / Gojek / Monorepo)**: Play Feature Delivery DFMs, decoupled contract routers, Dagger subgraph scoping, and crash circuit breakers.

4. **🧠 Android Internals & Gotchas Quiz (50 Staff-Level Scenarios)**
   - 50 scenario-based questions with in-depth technical rationales covering Kotlin concurrency, Jetpack Compose internals, ART compilation, 16KB pages, Binder IPC, security, memory profiling, and architecture covering: Coroutines exception propagation, ART AOT compilation, 16 KB memory page alignment, Binder 1MB transaction buffer limits (`TransactionTooLargeException`), Compose `SnapshotMutationPolicy`, `Dispatchers.IO` vs `Default`, Android App Links digital asset verification, ProGuard/R8 full mode reflection traps, Dalvik vs Native heap memory, and `SubcomposeLayout` performance.

5. **⚡ Quick Reference Cheat Sheets (50 Comprehensive Topic Cards)**
   - Compose Stability & Skipping Rules.
   - Coroutines & Structured Concurrency.
   - Android 14 & 15 Platform Changes (FGS types & 16KB pages).
   - OWASP Mobile Top 10 Security Checklist.
   - Mobile System Design & Scale Blueprint Checklist.
   - Kotlin Flow Operators & Concurrency Matrix (`flatMapLatest`, `buffer`, `conflate`, `zip`, `combine`).
   - Memory Management, Leak Hunting & ART Internals (1MB Binder limit, `inBitmap`, LMK `onTrimMemory`).
   - Multi-Module Architecture & Dynamic Feature Delivery.

6. **📱 Dedicated Mobile-Only Essential Version (`mobile.html`)**
   - Lightweight, distraction-free smartphone experience designed for on-the-go review (commutes & pre-interview refresher).
   - **Pocket Cheatsheets**: Touch-friendly reference cards for Coroutines, Jetpack Compose traps, Android 14/15 FGS, and OWASP security.
   - **Touch Flashcard Quiz**: Interactive scenario-based MCQ engine with immediate feedback, staff rationale, and score tracking.
   - **Condensed Coding Talking Points**: High-yield architecture patterns, critical gotchas, and staff defense points with an expandable bottom sheet for the complete Kotlin solution.
   - **Company Intel Pocket Directory**: Fast search & filter of all 14 tracked firms and round-by-round interview breakdowns.
   - Seamless progress & theme synchronization with the full desktop studio via `localStorage`.

---

## 🛠️ Local Development & Running

### Option 1: Direct File
- Open `index.html` directly for the full Desktop Studio.
- Open `mobile.html` directly for the Mobile-Only Essential Version.

### Option 2: Local Python Server
```bash
./run.sh --server
```
or
```bash
python3 server.py
```
- Desktop Studio: `http://localhost:8090`
- Mobile-Only Version: `http://localhost:8090/mobile.html`

---

## 📄 License
MIT License. Crafted for senior mobile engineering excellence.
