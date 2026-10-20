# KubeQuest · Restore the Cloud

An offline Kubernetes adventure: investigate customer incidents, repair a simulated cluster, and watch the control plane and workers respond. Twenty self-paced missions take learners from their first Pod to intermediate troubleshooting and orchestration.

## Play or download

| Edition | Missions | Time limit | Play in your browser | Download one HTML file |
| --- | ---: | --- | --- | --- |
| **KubeQuest** — the complete Kubernetes learning adventure | 20 across 4 districts | Self-paced | [Play KubeQuest](https://edmvidanes.github.io/kube-quest/) | [Download KubeQuest HTML](https://github.com/edmvidanes/kube-quest/raw/refs/heads/main/index.html) |

The Play link opens the game on GitHub Pages. The hosted game and offline download use the same single `index.html`. The repository contains only the game and this README. Source repository: **[edmvidanes/kube-quest](https://github.com/edmvidanes/kube-quest)**.

For offline play, use **Settings → Download offline game**, or save the HTML download above as `KubeQuest-Offline.html` and open it in your browser. Transfer existing progress separately with **Settings → Export progress / Import progress**.

## How to play

**Only `index.html` is required.** Open it in a modern browser, or serve it on GitHub Pages. All JavaScript, styles, SVG artwork, the YAML parser, lessons, and simulation data are embedded. There is no runtime installation, build, backend, account, or internet requirement.

1. Choose **Accept the incident** on the cloud map.
2. Read the customer briefing and restoration checklist.
3. Inspect resources in the cluster diagram. Use **Guided actions**, the simulated terminal, or the **Manifests** editor to make changes.
4. Watch Kubernetes respond automatically, or use **Pause** and **Step**. **Replay** reviews the event history without changing the cluster.
5. Verify the required state and customer request to earn XP and unlock the next incident.

Hints, retries, and replay are free. Each normal mission awards 100 XP once; the finale awards 300 XP. Restoring each district earns a credential. The total campaign reward is 2,200 XP. Every mission begins with its own prepared lab; the sandbox is separate.

**Settings → Download offline game** saves a pristine complete `KubeQuest-Offline.html`. Open that file without internet to play. Export progress separately if you want to continue an existing expedition.

## Learning journey

| District | Missions | Concepts |
| --- | --- | --- |
| Launch Bay | 1–5 | Cluster components, namespaces, Pods, Deployment/ReplicaSet ownership, replacement and manual scaling |
| Connection District | 6–10 | Labels, Service selectors, EndpointSlices, DNS, Ingress, ConfigMaps and Secrets |
| Release Workshop | 11–15 | Readiness/liveness, rolling updates, failed images and rollback, PVC/PV data survival, Jobs |
| Reliability Ridge | 16–20 | Requests/limits, placement constraints, taints/tolerations, CPU HPA, cordon/drain, combined recovery |

The searchable field guide contains concepts, commands, failure explanations, and YAML examples. In hint solutions, replace `$pod` with a current Ready managed Pod name from `kubectl get pods`; guided controls choose a suitable name automatically.

## GitHub Pages

1. Create the **`kube-quest`** repository under **`edmvidanes`** on GitHub.
2. Upload **`index.html`** and **`README.md`** and commit them to **`main`**. Place both files directly at the repository root.
3. In the repository's **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. Wait for the Pages deployment to finish, then play at **[https://edmvidanes.github.io/kube-quest/](https://edmvidanes.github.io/kube-quest/)**.

If you choose a different repository name, update both links in the play/download table to match it. If the play link returns 404, check that deployment has finished and `index.html` is at the selected publishing root.

No installation, build command, or asset path configuration is required. The game works under a repository subpath. Once Pages is configured, commits to `main` automatically update the hosted game. For local play, open `index.html` directly in your browser.

## Saved progress

Campaign completion, XP, hints, current labs, YAML contents, command transcripts, sandbox, and preferences save locally in the browser. Saves are separate for each website origin, browser, and downloaded file location. They are not uploaded or synced.

Use **Settings → Export progress / Import progress** to back up or transfer a save. Imports are validated before replacement. If browser storage is disabled, the game still runs and shows a notice; export before leaving. Clearing site data removes the local save.

## Simulation boundaries

This is a teaching simulator, not a Kubernetes distribution. No command runs on your computer. HTTP requests, image pulls, metrics, storage, and credentials are fictional and never make network calls. Optional creator and official documentation links need internet.

- Desired specifications and observed state are separate. Each step performs one meaningful reconciliation event. Real independent controllers operate concurrently; their activity is serialized here for explanation.
- Kubernetes API validation, Deployment → ReplicaSet → Pod ownership, scheduling, kubelet/runtime startup, readiness, and Service backend updates are modeled. Application traffic uses a separate data path.
- Workloads have one application container and up to 12 replicas. Supported images are `cloudline:v1`, `cloudline:v2`, `cloudline:crash`, `nginx:1.27`, `nginx:1.28`, `nginx:alpine`, and the completing task `maintenance:v1`. Other images demonstrate a failed pull.
- CNI networking, DNS, an Ingress controller, and metrics provider are preconfigured. Ingress models HTTP host/Prefix routes. Supported Service types are ClusterIP, NodePort, and LoadBalancer. Synthetic addresses do not contact real hosts.
- Environment references refresh when containers start. Mounted ConfigMap/Secret refresh, startup probes, arbitrary exec, pipes, and real shell programs are outside the engine. `exec` supports bounded `curl`, `printenv`, and `cat /data/orders.txt` inspection.
- Scheduling uses CPU/memory requests, node selectors, NoSchedule taints, tolerations, cordon state, and supplied storage. Workers have 2 CPU and 4Gi each. CPU throttling is conceptual; memory limits below the simulated 64Mi working set demonstrate OOM termination.
- CPU HPA uses total teaching demand and uniform per-Pod requests, min/max bounds, and a 10% tolerance. Production stabilization windows and metrics sampling are simplified. Autoscaling does not create worker nodes.
- Storage models static binding to the supplied PV, ReadWriteOnce, data survival across Pod replacement, and emptyDir loss on Pod deletion. Multiple Pods may use this claim on the same node; it cannot be mounted across multiple nodes. Claim deletion, resizing, dynamic provisioning, CSI implementations, and reclaim operations are not simulated.
- Graceful Pod termination and drain timing are compressed. PodDisruptionBudgets, advanced eviction policies, multi-container workloads, CronJob scheduling, Helm, installation, operators, RBAC, NetworkPolicy, and cloud provisioning are outside the campaign.

Use the official Kubernetes documentation and a real learning cluster for production behavior and further practice.

## Credits

More learning games: **[Docker Quest](https://edmvidanes.github.io/docker-quest/)** and **[GitQuest](https://edmvidanes.github.io/GitQuest/)**.

Created by **[Dale.Vidanes](https://github.com/edmvidanes)** · GitHub **[@edmvidanes](https://github.com/edmvidanes)**.

The embedded js-yaml 4.1.1 browser bundle retains its MIT license notice. All game artwork is inline SVG generated for this project.
