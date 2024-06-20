
var netdataDashboard = window.netdataDashboard || {};

// ----------------------------------------------------------------------------
// menus

// information about the main menus

netdataDashboard.menu = {
    'system': {
        title: '系统概述',
        icon: '<i class="fas fa-bookmark"></i>',
        info: '关键系统指标的概述。'
    },

    'services': {
        title: 'systemd 服务',
        icon: '<i class="fas fa-cogs"></i>',
        info: 'systemd 服务的资源利用情况。netdata通过cgroups（容器使用的资源账户）监控所有systemd服务。'
    },

    'ap': {
        title: '接入点',
        icon: '<i class="fas fa-wifi"></i>',
        info: '系统中发现的接入点（即AP模式中的无线接口）的性能指标。'
    },

    'tc': {
        title: '服务质量',
        icon: '<i class="fas fa-globe"></i>',
        info: 'Netdata使用其tc-helper插件收集和可视化<code>tc</code>类的利用情况。如果您还使用FireQOS来设置QoS，netdata将自动收集接口和类名。如果您的QoS配置包括开销计算，这里显示的值将包括这些开销（与网络接口部分报告的相同接口的总带宽将低于此处报告的总带宽）。QoS数据收集可能与接口存在轻微的时间差异（QoS数据收集使用BASH脚本，因此数据收集的时间差异应该是合理的几毫秒）。'
    },

    'net': {
        title: '网络接口',
        icon: '<i class="fas fa-share-alt"></i>',
        info: '网络接口的性能指标。'
    },

    'ipv4': {
        title: 'IPv4 网络',
        icon: '<i class="fas fa-cloud"></i>',
        info: '系统IPv4协议栈的指标。 <a href="https://en.wikipedia.org/wiki/IPv4" target="_blank">IPv4</a>是Internet Protocol（IP）的第四个版本。它是Internet标准互联网方法的核心协议之一。IPv4是用于分组交换网络的无连接协议。它采用尽力而为的传输模型，不保证传输，也不保证正确的排序或避免重复传输。这些方面，包括数据完整性，由上层传输协议（如传输控制协议TCP）处理。'
    },

    'ipv6': {
        title: 'IPv6 网络',
        icon: '<i class="fas fa-cloud"></i>',
        info: '系统IPv6协议栈的指标。 <a href="https://en.wikipedia.org/wiki/IPv6" target="_blank">IPv6</a>是Internet Protocol（IP）的最新版本，是为计算机网络提供标识和定位系统以及在Internet上路由流量的通信协议。IPv6由互联网工程任务组（IETF）开发，用于解决IPv4地址耗尽的问题。IPv6旨在取代IPv4。'
    },

    'ipvs': {
        title: 'IP 虚拟服务器',
        icon: '<i class="fas fa-eye"></i>',
        info: '<a href="http://www.linuxvirtualserver.org/software/ipvs.html" target="_blank">IPVS（IP 虚拟服务器）</a>在Linux内核中实现传输层负载平衡，也称为第4层交换。在主机上运行的IPVS充当真实服务器集群前端的负载均衡器，它可以将基于TCP/UDP的服务请求定向到真实服务器，并使真实服务器的服务显示为单个IP地址上的虚拟服务。'
    },

    'netfilter': {
        title: '防火墙（netfilter）',
        icon: '<i class="fas fa-shield-alt"></i>',
        info: 'netfilter组件的性能指标。'
    },

    'ipfw': {
        title: '防火墙（ipfw）',
        icon: '<i class="fas fa-shield-alt"></i>',
        info: 'ipfw规则的计数器和内存使用情况。'
    },

    'cpu': {
        title: 'CPU',
        icon: '<i class="fas fa-bolt"></i>',
        info: '系统每个CPU的详细信息。可以在<a href="#menu_system">系统概述</a>部分找到所有CPU的系统摘要。'
    },

    'mem': {
        title: '内存',
        icon: '<i class="fas fa-microchip"></i>',
        info: '系统内存管理的详细信息。'
    },

    'disk': {
        title: '磁盘',
        icon: '<i class="fas fa-hdd"></i>',
        info: '所有系统磁盘的性能信息图表。特别注意以与<code>iostat -x</code>兼容的方式呈现磁盘性能指标。netdata默认情况下防止为单个分区和未挂载的虚拟磁盘渲染性能图表。可以通过在netdata配置文件中配置相关设置来启用已禁用的图表。'
    },

    'sensors': {
        title: '传感器',
        icon: '<i class="fas fa-leaf"></i>',
        info: '已配置系统传感器的读数。'
    },

    'ipmi': {
        title: 'IPMI',
        icon: '<i class="fas fa-leaf"></i>',
        info: '智能平台管理接口（IPMI）是一组计算机接口规范，用于为独立于主机系统的CPU、固件（BIOS或UEFI）和操作系统提供管理和监控功能的计算机子系统。'
    },

    'samba': {
        title: 'Samba',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '该系统的Samba文件共享操作的性能指标。Samba是Windows服务的实现，包括Windows SMB协议文件共享。'
    },

    'nfsd': {
        title: 'NFS服务器',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '网络文件服务器的性能指标。NFS是一种分布式文件系统协议，允许客户端计算机上的用户通过网络访问文件，类似于访问本地存储。NFS和许多其他协议一样，构建在开放网络计算远程过程调用（ONC RPC）系统之上。NFS是在请求评论（RFC）中定义的开放标准。'
    }, 

    'nfs': {
        title: 'NFS客户端',
        icon: '<i class="fas fa-folder-open"></i>',
        info: '此系统作为NFS客户端的NFS操作性能指标。'
    },

    'zfs': {
        title: 'ZFS文件系统',
        icon: '<i class="fas fa-folder-open"></i>',
        info: 'ZFS文件系统的性能指标。以下图表可视化了由<a href="https://github.com/zfsonlinux/zfs/blob/master/cmd/arcstat/arcstat.py" target="_blank">arcstat.py</a>和<a href="https://github.com/zfsonlinux/zfs/blob/master/cmd/arc_summary/arc_summary.py" target="_blank">arc_summary.py</a>报告的所有指标。'
    },

    'apps': {
        title: '应用程序',
        icon: '<i class="fas fa-heartbeat"></i>',
        info: '使用netdata的<code>apps.plugin</code>收集每个应用程序的统计信息。此插件遍历所有进程，并聚合感兴趣的应用程序的统计信息，这些应用程序在<code>/etc/netdata/apps_groups.conf</code>中定义（默认为<a href="https://github.com/firehol/netdata/blob/master/conf.d/apps_groups.conf" target="_blank">此处</a>）。插件在内部构建进程树（就像<code>ps fax</code>一样），并将进程分组在一起（评估子进程和父进程），以便结果始终是具有预定义维度集的图表（当然，只报告发现正在运行的应用程序组）。报告的值与<code>top</code>兼容，尽管netdata插件还计算已退出子进程的资源（与<code>top</code>不同，后者仅显示当前运行进程的资源）。因此，对于诸如shell脚本之类的进程，报告的值包括每个时间段内这些脚本运行的命令使用的资源。',
        height: 1.5
    },

    'users': {
        title: '用户',
        icon: '<i class="fas fa-user"></i>',
        info: '使用netdata的<code>apps.plugin</code>收集每个用户的统计信息。该插件遍历所有进程，并按用户聚合统计信息。报告的值与<code>top</code>兼容，尽管netdata插件还计算已退出子进程的资源（与<code>top</code>不同，后者仅显示当前运行进程的资源）。因此，对于诸如shell脚本之类的进程，报告的值包括每个时间段内这些脚本运行的命令所使用的资源。',
        height: 1.5
    },

    'groups': {
        title: '用户组',
        icon: '<i class="fas fa-users"></i>',
        info: '使用netdata的<code>apps.plugin</code>收集每个用户组的统计信息。该插件遍历所有进程，并按用户组聚合统计信息。报告的值与<code>top</code>兼容，尽管netdata插件还计算已退出子进程的资源（与<code>top</code>不同，后者仅显示当前运行进程的资源）。因此，对于诸如shell脚本之类的进程，报告的值包括每个时间段内这些脚本运行的命令所使用的资源。',
        height: 1.5
    },

    'netdata': {
        title: 'Netdata监控',
        icon: '<i class="fas fa-chart-bar"></i>',
        info: 'netdata本身及其插件的运行性能指标。'
    },

    'example': {
        title: '示例图表',
        info: '示例图表，演示外部插件架构。'
    },

    'cgroup': {
        title: '',
        icon: '<i class="fas fa-th"></i>',
        info: '容器资源利用率指标。Netdata从<b>cgroups</b>（从<b>控制组</b>缩写而来）中读取此信息，<b>cgroups</b>是Linux内核的一个功能，用于限制和记录一组进程的资源使用情况（CPU、内存、磁盘I/O、网络等）。<b>cgroups</b>与<b>namespaces</b>（提供进程间隔离）一起提供了我们通常所说的<b>容器</b>。'
    },

    'cgqemu': {
        title: 'QEMU虚拟机',
        icon: '<i class="fas fa-th-large"></i>',
        info: 'QEMU虚拟机资源利用率指标。QEMU（Quick Emulator的缩写）是一个免费开源的托管型虚拟化程序，可执行硬件虚拟化。'
    },

    'fping': {
        title: 'fping',
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: '网络延迟统计，通过<b>fping</b>。 <b>fping</b>是一个用于向网络主机发送ICMP回显探测的程序，类似于<code>ping</code>，但在同时ping多个主机时性能更好。3.15版本之后的fping可以直接用作netdata插件。'
    },

    'memcached': {
        title: 'memcached',
        icon: '<i class="fas fa-database"></i>',
        info: '对<b>memcached</b>的性能指标。Memcached是一个通用的分布式内存缓存系统。它通常用于通过将数据和对象缓存在RAM中来加速动态数据库驱动的网站，以减少读取外部数据源（如数据库或API）的次数。'
    },

    'mysql': {
        title: 'MySQL',
        icon: '<i class="fas fa-database"></i>',
        info: '对<b>mysql</b>的性能指标，这是一种开源的关系型数据库管理系统（RDBMS）。'
    },

    'postgres': {
        title: 'Postgres',
        icon: '<i class="fas fa-database"></i>',
        info: '对<b>PostgresSQL</b>的性能指标，这是一种面向对象的关系数据库管理系统（ORDBMS）。'
    },

    'redis': {
        title: 'Redis',
        icon: '<i class="fas fa-database"></i>',
        info: '对<b>redis</b>的性能指标。Redis（远程字典服务器）是一个实现数据结构服务器的软件项目。它是开源的、网络化的、内存中的，并且可以选择性地存储键。'
    },

    'retroshare': {
        title: 'RetroShare',
        icon: '<i class="fas fa-share-alt"></i>',
        info: 'RetroShare的性能指标。RetroShare是基于GNU隐私卫士（GPG）构建的朋友对朋友网络的开源软件，用于加密文件共享、无服务器电子邮件、即时消息、在线聊天和BBS。'
    },

    'ipfs': {
        title: 'IPFS',
        icon: '<i class="fas fa-folder-open"></i>',
        info: 'IPFS的性能指标，这是一个内容可寻址的点对点超媒体分发协议。'
    },

    'phpfpm': {
        title: 'PHP-FPM',
        icon: '<i class="fas fa-eye"></i>',
        info: 'PHP-FPM的性能指标，这是PHP的另一种FastCGI实现。'
    },

    'postfix': {
        title: 'postfix',
        icon: '<i class="fas fa-envelope"></i>',
        info: undefined
    },

    'dovecot': {
        title: 'Dovecot',
        icon: '<i class="fas fa-envelope"></i>',
        info: undefined
    },

    'hddtemp': {
        title: 'HDD Temp',
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: undefined
    },

    'nginx': {
        title: 'nginx',
        icon: '<i class="fas fa-eye"></i>',
        info: undefined
    },

    'apache': {
        title: 'Apache',
        icon: '<i class="fas fa-eye"></i>',
        info: undefined
    },

    'lighttpd': {
        title: 'Lighttpd',
        icon: '<i class="fas fa-eye"></i>',
        info: undefined
    },

    'web_log': {
        title: undefined,
        icon: '<i class="fas fa-file-alt"></i>',
        info: '从服务器日志文件中提取的信息。<code>web_log</code>插件逐步解析服务器日志文件，以实时提供关键服务器性能指标的详细信息。对于Web服务器，可以选择使用扩展的日志文件格式（对于<code>nginx</code>和<code>apache</code>），提供请求和响应的时间信息和带宽。 <code>web_log</code>插件还可以配置为按URL模式提供请求的详细信息（请查看<a href="https://github.com/firehol/netdata/blob/master/conf.d/python.d/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>）。'
    },

    'named': {
        title: 'named',
        icon: '<i class="fas fa-tag"></i>',
        info: undefined
    },

    'squid': {
        title: 'squid',
        icon: '<i class="fas fa-exchange-alt"></i>',
        info: undefined
    },

    'nut': {
        title: 'UPS',
        icon: '<i class="fas fa-battery-half"></i>',
        info: undefined
    },

    'apcupsd': {
        title: 'UPS',
        icon: '<i class="fas fa-battery-half"></i>',
        info: undefined
    },

    'smawebbox': {
        title: '太阳能发电',
        icon: '<i class="fas fa-sun"></i>',
        info: undefined
    },

    'fronius': {
        title: 'Fronius',
        icon: '<i class="fas fa-sun"></i>',
        info: undefined
    },

    'stiebeleltron': {
        title: 'Stiebel Eltron',
        icon: '<i class="fas fa-thermometer-half"></i>',
        info: undefined
    },

    'snmp': {
        title: 'SNMP',
        icon: '<i class="fas fa-random"></i>',
        info: undefined
    },

    'go_expvar': {
        title: 'Go - expvars',
        icon: '<i class="fas fa-eye"></i>',
        info: '关于运行中的Go应用程序的统计信息，由<a href="https://golang.org/pkg/expvar/" target="_blank">expvar包</a>公开。'
    },

    'chrony': {
        icon: '<i class="fas fa-clock"></i>',
        info: '关于系统时钟性能的chronyd参数。'
    },

    'couchdb': {
        icon: '<i class="fas fa-database"></i>',
        info: '关于<b><a href="https://couchdb.apache.org/">CouchDB</a></b>性能指标，这是一个具有HTTP API和多主复制功能的开源JSON文档数据库。'
    },

    'beanstalk': {
        title: 'Beanstalkd',
        icon: '<i class="fas fa-tasks"></i>',
        info: '提供有关<b><a href="http://kr.github.io/beanstalkd/">beanstalkd</a></b>服务器和该服务器上可用的任何tube的统计信息，使用从beanstalkc获取的数据。'
    }
};



// ----------------------------------------------------------------------------
// submenus

// information to be shown, just below each submenu

// information about the submenus
netdataDashboard.submenu = {
    'web_log.squid_bandwidth': {
        title: '带宽',
        info: '由Squid发送的响应的带宽。该图表可能会呈现异常的峰值，因为带宽是在服务器保存日志行的时间计算的，即使提供服务所需的时间跨越了更长的持续时间。我们建议使用QoS（例如<a href="http://firehol.org/#fireqos" target="_blank">FireQOS</a>）来准确计算服务器带宽。'
    },

    'web_log.squid_responses': {
        title: '响应',
        info: '与Squid发送的响应相关的信息。'
    },

    'web_log.squid_requests': {
        title: '请求',
        info: '与Squid接收到的请求相关的信息。'
    },

    'web_log.squid_hierarchy': {
        title: '层次结构',
        info: '用于提供请求的Squid层次结构的性能指标。'
    },

    'web_log.squid_squid_transport': {
        title: '传输'
    },

    'web_log.squid_squid_cache': {
        title: '缓存',
        info: 'Squid缓存性能指标。'
    },

    'web_log.squid_timings': {
        title: '时间',
        info: 'Squid请求的持续时间。可能会报告不现实的峰值，因为Squid记录请求的总时间，当请求完成时。特别是对于HTTPS，客户端从代理获取隧道，并直接与上游服务器交换请求，因此Squid无法评估单个请求，并报告隧道打开的总时间。'
    },

    'web_log.squid_clients': {
        title: '客户端'
    },

    'web_log.bandwidth': {
        info: '请求（<code>received</code>）和响应（<code>sent</code>）的带宽。 <code>received</code> 需要扩展的日志格式（如果没有，Web服务器日志将不包含此信息）。该图表可能会呈现异常的峰值，因为带宽是在Web服务器保存日志行的时间计算的，即使提供服务所需的时间跨越了更长的持续时间。我们建议使用QoS（例如<a href="http://firehol.org/#fireqos" target="_blank">FireQOS</a>）来准确计算Web服务器带宽。'
    },

    'web_log.urls': {
        info: '在<a href="https://github.com/firehol/netdata/blob/master/conf.d/python.d/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>中定义的每个<code>URL模式</code>的请求次数。此图表计算所有匹配所定义的URL模式的请求，独立于Web服务器响应代码（即成功和不成功的请求）。'
    },

    'web_log.clients': {
        info: '显示访问Web服务器的唯一客户端IP数量的图表。'
    },

    'web_log.timings': {
        info: 'Web服务器响应时间 - Web服务器准备和响应请求所需的时间。这需要扩展的日志格式，其含义是特定于Web服务器的。对于大多数Web服务器，这包括从接收完整请求到发送响应的最后一个字节的时间。因此，它包括响应的网络延迟，但不包括请求的网络延迟。'
    },

    'mem.ksm': {
        title: '内存去重',
        info: '内核同页合并（KSM）性能监控，从<code>/sys/kernel/mm/ksm/</code>中的多个文件中读取。KSM是Linux内核（自2.6.32版本以来）中的一项节省内存的去重功能。KSM守护程序ksmd定期扫描已向其注册的用户内存区域，寻找可以由单个写保护页面替换的相同内容的页面（如果进程后来想要更新其内容，则会自动复制）。KSM最初是为KVM开发的（在那里它被称为内核共享内存），以便在物理内存中容纳更多的虚拟机，通过共享它们之间的公共数据。但它对于生成许多相同数据实例的任何应用程序都可能有用。'
    },

    'mem.numa': {
        info: '非统一内存访问（NUMA）是一种分层内存设计，内存访问时间取决于局部性。在NUMA下，处理器可以比非本地内存（另一个处理器本地的内存或处理器之间共享的内存）更快地访问自己的本地内存。各个指标在<a href="https://www.kernel.org/doc/Documentation/numastat.txt" target="_blank">Linux内核文档</a>中有描述。'
    },

    'ipv4.ecn': {
        info: '<a href="https://en.wikipedia.org/wiki/Explicit_Congestion_Notification" target="_blank">显式拥塞通知（ECN）</a>是一种TCP扩展，允许在不丢弃数据包的情况下端到端地通知网络拥塞。ECN是一种可选功能，当底层网络基础设施也支持时，可以在两个支持ECN的端点之间使用。'
    },

    'netfilter.conntrack': {
        title: '连接跟踪',
        info: 'Netfilter连接跟踪性能指标。连接跟踪器跟踪机器的所有连接，入站和出站。它通过保持具有所有打开连接的数据库来工作，跟踪网络和地址转换以及连接期望。'
    },

    'netfilter.nfacct': {
        title: '带宽账户',
        info: '使用<code>nfacct.plugin</code>读取以下信息。'
    },

    'netfilter.synproxy': {
        title: 'DDoS防护',
        info: 'DDoS防护性能指标。<a href="https://github.com/firehol/firehol/wiki/Working-with-SYNPROXY" target="_blank">SYNPROXY</a>是一个TCP SYN数据包代理。它用于保护任何TCP服务器（如Web服务器）免受SYN洪水和类似的DDoS攻击。它是Linux内核中的netfilter模块（自3.12版本起）。它经过优化，可以处理每秒数百万个数据包，利用所有可用的CPU而无需在连接之间进行任何并发锁定。它可用于任何类型的TCP流量（甚至加密的），因为它不会干扰内容本身。'
    },

    'ipfw.dynamic_rules': {
        title: '动态规则',
        info: '由相应的有状态防火墙规则创建的动态规则数量。'
    },

    'system.softnet_stat': {
        title: 'softnet',
        info: function(os) {
            if(os === 'linux')
                return '与网络接收工作相关的CPU SoftIRQs统计。可以在<a href="#menu_cpu_submenu_softnet_stat">CPU / softnet统计</a>中找到每个CPU核心的详细信息。 <b>processed</b>表示处理的数据包数量，<b>dropped</b>表示因网络设备积压队列已满而丢弃的数据包数量（在Linux上使用<code>sysctl</code>增加<code>net.core.netdev_max_backlog</code>来解决），<b>squeezed</b>表示因网络设备预算用完而丢弃的数据包数量（在Linux上使用<code>sysctl</code>增加<code>net.core.netdev_budget</code>来解决）。有关识别和排除与网络驱动程序相关的问题的更多信息，请参阅<a href="https://access.redhat.com/sites/default/files/attachments/20150325_network_performance_tuning.pdf" target="_blank">Red Hat Enterprise Linux网络性能调整指南</a>。';
            else
                return '与网络接收工作相关的CPU SoftIRQs统计。';
        }
    },

    'cpu.softnet_stat': {
        title: 'softnet',
        info: function(os) {
            if(os === 'linux')
                return '与网络接收工作相关的每个CPU核心的SoftIRQs统计。可以在<a href="#menu_system_submenu_softnet_stat">系统 / softnet统计</a>中找到所有CPU核心的总计信息。 <b>processed</b>表示处理的数据包数量，<b>dropped</b>表示因网络设备积压队列已满而丢弃的数据包数量（在Linux上使用<code>sysctl</code>增加<code>net.core.netdev_max_backlog</code>来解决），<b>squeezed</b>表示因网络设备预算用完而丢弃的数据包数量（在Linux上使用<code>sysctl</code>增加<code>net.core.netdev_budget</code>来解决）。有关识别和排除与网络驱动程序相关的问题的更多信息，请参阅<a href="https://access.redhat.com/sites/default/files/attachments/20150325_network_performance_tuning.pdf" target="_blank">Red Hat Enterprise Linux网络性能调整指南</a>。';
            else
                return '与网络接收工作相关的每个CPU核心的SoftIRQs统计。可以在<a href="#menu_system_submenu_softnet_stat">系统 / softnet统计</a>中找到所有CPU核心的总计信息。';
        }
    },

    'go_expvar.memstats': {
        title: '内存统计',
        info: 'Go运行时内存统计。有关每个图表和值的更多信息，请参阅<a href="https://golang.org/pkg/runtime/#MemStats" target="_blank">runtime.MemStats</a>文档。'
    },

    'couchdb.dbactivity': {
        title: '数据库活动',
        info: '整个服务器的数据库读取和写入。这包括任何外部HTTP流量，以及在集群中执行的内部复制流量，以确保节点一致性。'
    },

    'couchdb.httptraffic': {
        title: 'HTTP流量细分',
        info: '所有HTTP流量，按请求类型（<tt>GET</tt>、<tt>PUT</tt>、<tt>POST</tt>等）和响应状态码（<tt>200</tt>、<tt>201</tt>、<tt>4xx</tt>等）进行细分。<br/><br/>这里的任何<tt>5xx</tt>错误都表明可能存在CouchDB错误；请查看日志文件以获取更多信息。'
    },

    'couchdb.ops': {
        title: '服务器操作'
    },

    'couchdb.perdbstats': {
        title: '每个数据库统计',
        info: '每个数据库的统计信息。这包括每个数据库的<a href="http://docs.couchdb.org/en/latest/api/database/common.html#get--db">3个大小图表</a>：活动（数据库中实时数据的大小）、外部（数据库内容的未压缩大小）和文件（磁盘上的文件大小，不包括任何视图和索引）。它还包括每个数据库的文档数量和已删除文档数量。'
    },

    'couchdb.erlang': {
        title: 'Erlang统计',
        info: '有关托管CouchDB的Erlang VM状态的详细信息。这些信息仅供高级用户使用。峰值消息队列（>10e6）通常表示超载条件。'
    }
};



// ----------------------------------------------------------------------------
// chart

// information works on the context of a chart
// Its purpose is to set:
//
// info: the text above the charts
// heads: the representation of the chart at the top the subsection (second level menu)
// mainheads: the representation of the chart at the top of the section (first level menu)
// colors: the dimension colors of the chart (the default colors are appended)
// height: the ratio of the chart height relative to the default
//
netdataDashboard.context = {
    'system.cpu': {
        info: function(os) {
            void(os);
            return '总CPU利用率（所有核心）。 这里的100％意味着没有CPU空闲时间。 您可以在<a href="#menu_cpu">CPU</a>部分获取每个核心的使用情况，并在<a href="#menu_apps">应用程序监控</a>部分获取每个应用程序的使用情况。'
                + netdataDashboard.sparkline('<br/>注意 <b>iowait</b> ', 'system.cpu', 'iowait', '%', '。如果它一直很高，您的磁盘将成为瓶颈，并减慢系统速度。')
                + netdataDashboard.sparkline('<br/>一个值得监控的重要指标是 <b>softirq</b> ', 'system.cpu', 'softirq', '%', '。不断高的softirq百分比可能表明网络驱动程序存在问题。');
        },
        valueRange: "[0, 100]"
    },

    'system.load': {
        info: '当前系统负载，即正在使用CPU或等待系统资源（通常是CPU和磁盘）的进程数量。这3个指标分别是1、5和15分钟的平均值。系统每5秒计算一次。有关更多信息，请查看<a href="https://en.wikipedia.org/wiki/Load_(computing)" target="_blank">此维基百科文章</a>',
        height: 0.7
    },

    'system.io': {
        info: function(os) {
            var s = '所有物理磁盘的总磁盘I/O。您可以在<a href="#menu_disk">磁盘</a>部分获取每个磁盘的详细信息，并在<a href="#menu_apps">应用程序监控</a>部分获取每个应用程序的磁盘使用情况。';

            if(os === 'linux')
                return s + ' 物理磁盘是列在<code>/sys/block</code>中的所有磁盘，但不存在于<code>/sys/devices/virtual/block</code>中。';
            else
                return s;
        }
    },

    'system.pgpgio': {
        info: '从/到磁盘的内存分页。这通常是系统的总磁盘I/O。'
    },

    'system.swapio': {
        info: '总交换I/O。（netdata测量<code>in</code>和<code>out</code>。如果图表中没有显示其中任何一个，那是因为它为零-您可以更改页面设置，始终在所有图表上呈现所有可用维度）。'
    },

    'system.pgfaults': {
        info: '总页面错误。 <b>主要页面错误</b> 表示系统正在使用其交换空间。您可以在<a href="#menu_apps">应用程序监控</a>部分找到使用交换空间的应用程序。'
    },

    'system.entropy': {
        colors: '#CC22AA',
        info: '<a href="https://en.wikipedia.org/wiki/Entropy_(computing)" target="_blank">熵</a>，是一个随机数池（<a href="https://en.wikipedia.org/wiki//dev/random" target="_blank">/dev/random</a>），主要用于密码学。如果熵池变空，需要随机数的进程可能会运行得很慢（这取决于每个程序使用的接口），等待熵池被补充。理想情况下，高熵需求的系统应该有一个专门的硬件设备（TPM就是这样的设备）。你也可以安装一些纯软件的选择，比如<code>haveged</code>，尽管这些通常只在服务器上有用。'
    },

    'system.forks': {
        colors: '#5555DD',
        info: '新创建的进程数量。'
    },

    'system.intr': {
        colors: '#DD5555',
        info: 'CPU中断的总数。查看<code>system.interrupts</code>可以得到关于每个中断的更多细节，还可以在<a href="#menu_cpu">CPU</a>部分分析每个CPU核心的中断情况。'
    },

    'system.interrupts': {
        info: 'CPU中断的详细信息。在<a href="#menu_cpu">CPU</a>部分，可以分析每个CPU核心的中断情况。'
    },

    'system.softirqs': {
        info: 'CPU软中断的详细信息。在<a href="#menu_cpu">CPU</a>部分，可以分析每个CPU核心的软中断情况。'
    },

    'system.processes': {
        info: '系统进程。<b>运行中</b>的是CPU中的进程。<b>阻塞中</b>的是愿意进入CPU的进程，但它们不能进入，例如因为它们在等待磁盘活动。'
    },

    'system.active_processes': {
        info: '所有系统进程。'
    },

    'system.ctxt': {
        info: '<a href="https://en.wikipedia.org/wiki/Context_switch" target="_blank">上下文切换</a>，是CPU从一个进程、任务或线程切换到另一个的过程。如果有很多进程或线程愿意执行，而可用的CPU核心很少，系统会进行更多的上下文切换来平衡它们之间的CPU资源。整个过程是计算密集型的。上下文切换越多，系统运行越慢。'
    },

    'system.idlejitter': {
        info: '空闲抖动是由netdata计算的。它会生成一个线程，请求休眠几微秒。当系统唤醒它时，它会测量经过了多少微秒。请求的休眠时长与实际休眠时长之间的差异，就是<b>空闲抖动</b>。这个数字在实时环境中很有用，因为CPU抖动会影响服务的质量（比如VoIP媒体网关）。'
    },

    'system.net': {
        info: function(os) {
            var s = '所有物理网络接口的总带宽。这不包括<code>lo</code>、VPN、网络桥接、IFB设备、绑定接口等。只有物理网络接口的带宽被聚合。';

            if(os === 'linux')
                return s + ' 物理接口是指列在<code>/proc/net/dev</code>中但不存在于<code>/sys/devices/virtual/net</code>中的所有网络接口。';
            else
                return s;
        }
    },

    'system.ipv4': {
        info: 'IPv4流量总量。'
    },

    'system.ipv6': {
        info: 'IPv6流量总量。'
    },

    'system.ram': {
        info: '系统随机存取内存（即物理内存）使用情况。'
    },

    'system.swap': {
        info: '系统交换内存使用情况。当物理内存（RAM）已满时，会使用交换空间。当系统需要更多内存资源且RAM已满时，内存中的非活动页面会被移至交换空间（通常是磁盘、磁盘分区或文件）。'
    },
    // ------------------------------------------------------------------------
    // CPU charts

    'cpu.cpu': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]"
    },

    'cpu.interrupts': {
        commonMin: true,
        commonMax: true
    },

    'cpu.softirqs': {
        commonMin: true,
        commonMax: true
    },

    'cpu.softnet_stat': {
        commonMin: true,
        commonMax: true
    },

    // ------------------------------------------------------------------------
    // MEMORY

    'mem.ksm_savings': {
        heads: [
            netdataDashboard.gaugeChart('已节省', '12%', '节省', '#0099CC')
        ]
    },

    'mem.ksm_ratios': {
        heads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="节省"'
                    + ' data-units="百分比 %"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'mem.pgfaults': {
        info: '页面错误是计算机硬件在运行程序访问映射到虚拟地址空间但实际未加载到主存储器的内存页面时引发的一种中断，称为陷阱。如果在生成错误时内存页面已加载到内存中，但未标记为加载到内存中，则称为<b>次要</b>或软页面错误。当系统需要从磁盘或交换内存加载内存页面时，将生成<b>主要</b>页面错误。'
    },

    'mem.committed': {
        colors: NETDATA.colors[3],
        info: '已分配内存是由进程分配的所有内存的总和。'
    },

    'mem.writeback': {
        info: '<b>dirty</b>是等待写入磁盘的内存量。 <b>写回</b>是正在主动写入磁盘的内存量。'
    },

    'mem.kernel': {
        info: '内核正在使用的内存总量。 <b>Slab</b>是内核用于缓存数据结构以供自身使用的内存量。 <b>KernelStack</b>是内核为每个任务分配的内存量。 <b>PageTables</b>是用于将虚拟地址转换为物理内存地址的最低级页表的内存量（页表用于将虚拟地址转换为物理内存地址）。 <b>VmallocUsed</b>是用作虚拟地址空间的内存量。'
    },

    'mem.slab': {
        info: '<b>可回收</b>是内核可以重用的内存量。 <b>不可回收</b>是即使在内核缺乏内存时也无法重用的内存量。'
    },

    'net.drops': {
        info: '在网络接口级别丢弃的数据包。这些是<code>ifconfig</code>报告的相同计数器，如<code>RX dropped</code>（入站）和<code>TX dropped</code>（出站）。<b>入站</b>数据包可能由于<a href="#menu_system_submenu_softnet_stat">softnet backlog</a>溢出、错误/意外的VLAN标记、未知或未注册的协议、服务器未配置为IPv6时而在网络接口级别丢弃。请查看<a href="https://www.novell.com/support/kb/doc.php?id=7007165" target="_blank">此文档</a>获取更多信息。'
    },

    'ipv4.tcpmemorypressures': {
        info: '由于非致命内存分配失败（内核尝试通过减少发送缓冲区等方式来解决此情况）而将套接字置于<b>内存压力</b>状态的次数。'
    },

    'ipv4.tcpconnaborts': {
        info: 'TCP连接中止。 <b>baddata</b>（<code>TCPAbortOnData</code>）发生在连接处于<code>FIN_WAIT1</code>状态时，内核接收到一个序列号超出此连接的最后一个序列号的数据包 - 内核会用<code>RST</code>回应（关闭连接）。 <b>userclosed</b>（<code>TCPAbortOnClose</code>）发生在内核接收到已关闭连接上的数据并用<code>RST</code>回应时。 <b>nomemory</b>（<code>TCPAbortOnMemory</code>）发生在有太多的孤立套接字（未附加到fd）并且内核必须丢弃连接时 - 有时会发送<code>RST</code>，有时不会。 <b>timeout</b>（<code>TCPAbortOnTimeout</code>）发生在连接超时时。 <b>linger</b>（<code>TCPAbortOnLinger</code>）发生在内核杀死一个已经由应用程序关闭并且持续足够长时间的套接字时。 <b>failed</b>（<code>TCPAbortFailed</code>）发生在内核尝试发送<code>RST</code>但由于没有可用内存而失败时。'
    },

    'apps.mem': {
        info: '应用程序使用的实际内存（RAM）。这不包括共享内存。'
    },

    'apps.vmem': {
        info: '应用程序分配的虚拟内存。请查看<a href="https://github.com/firehol/netdata/wiki/netdata-virtual-memory-size" target="_blank">此文章</a>获取更多信息。'
    },

    'users.mem': {
        info: '每个用户使用的实际内存（RAM）。这不包括共享内存。'
    },

    'users.vmem': {
        info: '每个用户分配的虚拟内存。请查看<a href="https://github.com/firehol/netdata/wiki/netdata-virtual-memory-size" target="_blank">此文章</a>获取更多信息。'
    },

    'users.preads': {
        height: 2.0
    },

    'users.pwrites': {
        height: 2.0
    },

    // ------------------------------------------------------------------------
    // GROUPS

    'groups.cpu': {
        height: 2.0
    },

    'groups.mem': {
        info: '每个用户组使用的实际内存（RAM）。这不包括共享内存。'
    },

    'groups.vmem': {
        info: '每个用户组分配的虚拟内存。请查看<a href="https://github.com/firehol/netdata/wiki/netdata-virtual-memory-size" target="_blank">此文章</a>获取更多信息。'
    },

    'groups.preads': {
        height: 2.0
    },

    'groups.pwrites': {
        height: 2.0
    },

    // ------------------------------------------------------------------------
    // NETWORK QoS

    'tc.qos': {
        heads: [
            function(os, id) {
                void(os);

                if(id.match(/.*-ifb$/))
                    return netdataDashboard.gaugeChart('入站', '12%', '', '#5555AA');
                else
                    return netdataDashboard.gaugeChart('出站', '12%', '', '#AA9900');
            }
        ]
    },

    // ------------------------------------------------------------------------
    // NETWORK INTERFACES

    'net.net': {
        mainheads: [
            function(os, id) {
                void(os);
                if(id.match(/^cgroup_.*/)) {
                    var iface;
                    try {
                        iface = ' ' + id.substring(id.lastIndexOf('.net_') + 5, id.length);
                    }
                    catch (e) {
                        iface = '';
                    }
                    return netdataDashboard.gaugeChart('接收' + iface, '12%', '接收');
                }
                else
                    return '';
            },
            function(os, id) {
                void(os);
                if(id.match(/^cgroup_.*/)) {
                    var iface;
                    try {
                        iface = ' ' + id.substring(id.lastIndexOf('.net_') + 5, id.length);
                    }
                    catch (e) {
                        iface = '';
                    }
                    return netdataDashboard.gaugeChart('发送' + iface, '12%', '发送');
                }
                else
                    return '';
            }
        ],
        heads: [
            function(os, id) {
                void(os);
                if(!id.match(/^cgroup_.*/))
                    return netdataDashboard.gaugeChart('接收', '12%', '接收');
                else
                    return '';
            },
            function(os, id) {
                void(os);
                if(!id.match(/^cgroup_.*/))
                    return netdataDashboard.gaugeChart('发送', '12%', '发送');
                else
                    return '';
            }
        ]
    },

    // ------------------------------------------------------------------------
    // NETFILTER

    'netfilter.sockets': {
        colors: '#88AA00',
        heads: [
            netdataDashboard.gaugeChart('活跃连接', '12%', '', '#88AA00')
        ]
    },

    'netfilter.new': {
        heads: [
            netdataDashboard.gaugeChart('新连接', '12%', '新', '#5555AA')
        ]
    },

    // ------------------------------------------------------------------------
    // DISKS
    'disk.util': {
        colors: '#FF5588',
        heads: [
            netdataDashboard.gaugeChart('利用率', '12%', '', '#FF5588')
        ],
        info: '磁盘利用率衡量磁盘忙于某项任务的时间。这与其性能无关。100%表示系统始终有未完成的磁盘操作。请记住，根据磁盘的底层技术，这里的100%可能或可能不是拥塞的指示。'
    },

    'disk.backlog': {
        colors: '#0099CC',
        info: '积压是挂起磁盘操作的持续时间的指示。在每个I/O事件上，系统将自上次更新此字段以来进行I/O的时间乘以挂起操作的数量。虽然不精确，但此指标可以提供进行中操作的预期完成时间的指示。'
    },

    'disk.io': {
        heads: [
            netdataDashboard.gaugeChart('读取', '12%', '读取'),
            netdataDashboard.gaugeChart('写入', '12%', '写入')
        ],
        info: '传输到磁盘和从磁盘传输的数据量。'
    },

    'disk.ops': {
        info: '已完成的磁盘I/O操作。请记住，请求的操作数量可能更高，因为系统能够合并相邻的操作（请参阅合并操作图表）。'
    },

    'disk.qops': {
        info: '当前正在进行的I/O操作。此指标是一个快照 - 它不是上一个间隔的平均值。'
    },

    'disk.iotime': {
        height: 0.5,
        info: '所有已完成I/O操作的持续时间之和。如果磁盘能够并行执行I/O操作，这个数字可能会超过间隔。'
    },
    'disk.mops': {
        height: 0.5,
        info: '合并磁盘操作的数量。系统能够合并相邻的I/O操作，例如两个4KB读取可以在传递给磁盘之前变成一个8KB读取。'
    },
    'disk.svctm': {
        height: 0.5,
        info: '已完成I/O操作的平均服务时间。此指标是使用磁盘的总忙碌时间和已完成操作的数量计算的。如果磁盘能够执行多个并行操作，报告的平均服务时间将是误导性的。'
    },
    'disk.avgsz': {
        height: 0.5,
        info: '平均I/O操作大小。'
    },
    'disk.await': {
        height: 0.5,
        info: '发往设备的I/O请求被服务的平均时间。这包括请求在队列中花费的时间和为它们提供服务的时间。'
    },

    'disk.space': {
        info: '磁盘空间利用率。系统自动保留给root用户，以防止root用户的空间不足。'
    },
    'disk.inodes': {
        info: '索引节点（inode）是文件系统对象（例如文件和目录）。在许多类型的文件系统实现中，索引节点的最大数量在文件系统创建时被固定，限制了文件系统可以容纳的文件的最大数量。设备可能会用完索引节点。发生这种情况时，即使可能有可用空间，也无法在设备上创建新文件。'
    },

    'mysql.net': {
        info: '发送到mysql客户端的数据量（<strong>out</strong>）和从mysql客户端接收的数据量（<strong>in</strong>）。'
    },

    // ------------------------------------------------------------------------
    // MYSQL

    'mysql.queries': {
        info: '服务器执行的语句数量。<ul>' +
        '<li><strong>queries</strong> 计算存储的SQL程序中执行的语句。</li>' +
        '<li><strong>questions</strong> 计算由mysql客户端发送到mysql服务器的语句。</li>' +
        '<li><strong>slow queries</strong> 计算执行时间超过<a href="http://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_long_query_time" target="_blank">long_query_time</a>秒的语句数量。有关慢查询的更多信息，请查看mysql <a href="http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html" target="_blank">慢查询日志</a>。</li>' +
        '</ul>'
    },

    'mysql.handlers': {
        info: 'mysql内部处理程序的使用情况。此图表非常好地展示了mysql服务器实际在做什么。' +
        '（如果图表未显示所有这些维度，那是因为它们为零 - 从仪表板设置中将<strong>要显示的维度</strong>设置为<strong>全部</strong>，以渲染甚至零值）<ul>' +
        '<li><strong>commit</strong>，内部<a href="http://dev.mysql.com/doc/refman/5.7/en/commit.html" target="_blank">COMMIT</a>语句的数量。</li>' +
        '<li><strong>delete</strong>，从表中删除行的次数。</li>' +
        '<li><strong>prepare</strong>，两阶段提交操作的准备阶段的计数器。</li>' +
        '<li><strong>read first</strong>，读取索引中第一个条目的次数。高值表明服务器正在进行大量的完整索引扫描；例如：<strong>SELECT col1 FROM foo</strong>，其中col1已建立索引。</li>' +
        '<li><strong>read key</strong>，基于键的请求读取行的次数。如果此值很高，则很好地表明您的表针对查询进行了适当的索引。</li>' +
        '<li><strong>read next</strong>，请求按键顺序读取下一行的次数。如果您正在查询带有范围约束的索引列，或者正在进行索引扫描，则会增加此值。</li>' +
        '<li><strong>read prev</strong>，请求按键顺序读取上一行的次数。此读取方法主要用于优化<strong>ORDER BY ... DESC</strong>。</li>' +
        '<li><strong>read rnd</strong>，基于固定位置的请求读取行的次数。高值表示您正在执行许多需要对结果进行排序的查询。您可能有许多需要MySQL扫描整个表的查询，或者连接未正确使用键。</li>' +
        '<li><strong>read rnd next</strong>，请求读取数据文件中下一行的次数。如果您正在进行大量的表扫描，则此值很高。通常，这表明您的表未正确建立索引，或者您的查询未编写以利用您拥有的索引。</li>' +
        '<li><strong>rollback</strong>，存储引擎执行回滚操作的请求次数。</li>' +
        '<li><strong>savepoint</strong>，存储引擎放置保存点的请求次数。</li>' +
        '<li><strong>savepoint rollback</strong>，存储引擎回滚到保存点的请求次数。</li>' +
        '<li><strong>update</strong>，更新表中行的请求次数。</li>' +
        '<li><strong>write</strong>，向表中插入行的请求次数。</li>' +
        '</ul>'
    },

    'mysql.table_locks': {
        info: 'MySQL表锁计数器：<ul>' +
        '<li><strong>immediate</strong>，立即授予表锁的次数。</li>' +
        '<li><strong>waited</strong>，无法立即授予表锁并且需要等待的次数。如果此值很高并且您遇到性能问题，您应首先优化查询，然后要么拆分表或表，要么使用复制。</li>' +
        '</ul>'
    },

    // ------------------------------------------------------------------------
    // APACHE

    'apache.connections': {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart('连接数', '12%', '', NETDATA.colors[4])
        ]
    },

    'apache.requests': {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart('请求数', '12%', '', NETDATA.colors[0])
        ]
    },

    'apache.net': {
        colors: NETDATA.colors[3],
        mainheads: [
            netdataDashboard.gaugeChart('带宽', '12%', '', NETDATA.colors[3])
        ]
    },

    'apache.workers': {
        mainheads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="busy"'
                    + ' data-append-options="percentage"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="工作进程利用率"'
                    + ' data-units="percentage %"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'apache.bytesperreq': {
        colors: NETDATA.colors[3],
        height: 0.5
    },

    'apache.reqpersec': {
        colors: NETDATA.colors[4],
        height: 0.5
    },

    'apache.bytespersec': {
        colors: NETDATA.colors[6],
        height: 0.5
    },


    // ------------------------------------------------------------------------
    // LIGHTTPD

    'lighttpd.connections': {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart('连接数', '12%', '', NETDATA.colors[4])
        ]
    },

    'lighttpd.requests': {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart('请求', '12%', '', NETDATA.colors[0])
        ]
    },

    'lighttpd.net': {
        colors: NETDATA.colors[3],
        mainheads: [
            netdataDashboard.gaugeChart('带宽', '12%', '', NETDATA.colors[3])
        ]
    },

    'lighttpd.workers': {
        mainheads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="busy"'
                    + ' data-append-options="percentage"'
                    + ' data-gauge-max-value="100"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="服务器利用率"'
                    + ' data-units="percentage %"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'lighttpd.bytesperreq': {
        colors: NETDATA.colors[3],
        height: 0.5
    },

    'lighttpd.reqpersec': {
        colors: NETDATA.colors[4],
        height: 0.5
    },

    'lighttpd.bytespersec': {
        colors: NETDATA.colors[6],
        height: 0.5
    },

    // ------------------------------------------------------------------------
    // NGINX

    'nginx.connections': {
        colors: NETDATA.colors[4],
        mainheads: [
            netdataDashboard.gaugeChart('连接数', '12%', '', NETDATA.colors[4])
        ]
    },

    'nginx.requests': {
        colors: NETDATA.colors[0],
        mainheads: [
            netdataDashboard.gaugeChart('请求数', '12%', '', NETDATA.colors[0])
        ]
    },

    // ------------------------------------------------------------------------
    // NETDATA

    'netdata.response_time': {
        info: 'netdata API响应时间衡量了netdata提供请求所需的时间。这个时间包括了从接收请求的第一个字节到发送回复的最后一个字节的所有内容，因此它包括了所有涉及的网络延迟（例如，慢网络上的客户端会影响这些指标）。'
    },

    // ------------------------------------------------------------------------
    // RETROSHARE

    'retroshare.bandwidth': {
        info: 'RetroShare入站和出站流量。',
        mainheads: [
            netdataDashboard.gaugeChart('接收', '12%', 'bandwidth_down_kb'),
            netdataDashboard.gaugeChart('发送', '12%', 'bandwidth_up_kb')
        ]
    },

    'retroshare.peers': {
        info: '（已连接的）RetroShare好友数量。',
        mainheads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="peers_connected"'
                    + ' data-append-options="friends"'
                    + ' data-chart-library="easypiechart"'
                    + ' data-title="已连接的好友"'
                    + ' data-units=""'
                    + ' data-width="8%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' role="application"></div>';
            }
        ]
    },

    'retroshare.dht': {
        info: '关于RetroShare的DHT的统计信息。这些值是估计值！'
    },

    // ------------------------------------------------------------------------
    // fping

    'fping.quality': {
        colors: NETDATA.colors[10],
        height: 0.5
    },

    'fping.packets': {
        height: 0.5
    },


    // ------------------------------------------------------------------------
    // containers

    'cgroup.cpu': {
        mainheads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="CPU"'
                    + ' data-units="%"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' role="application"></div>';
            }
        ]
    },

    'cgroup.mem_usage': {
        mainheads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="Memory"'
                    + ' data-units="MB"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' role="application"></div>';
            }
        ]
    },

    'cgroup.throttle_io': {
        mainheads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="read"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="磁盘读取I/O"'
                    + ' data-units="KB/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' role="application"></div>';
            },
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="write"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="磁盘写入 I/O"'
                    + ' data-units="KB/s"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' role="application"></div>';
            }
        ]
    },
    
    // ------------------------------------------------------------------------
    // beanstalkd
    // system charts
    'beanstalk.cpu_usage': {
        info: 'beanstalkd使用的用户和系统CPU时间的数量。'
    },

    'beanstalk.jobs_rate': {
        info: 'beanstalkd处理的作业速率。'
    },

    'beanstalk.connections_rate': {
        info: '连接到beanstalkd的打开速率。'
    },

    'beanstalk.commands_rate': {
        info: 'beanstalkd接收的命令速率。'
    },

    'beanstalk.current_tubes': {
        info: '服务器上当前管道的总数，包括默认管道（始终存在）。'
    },

    'beanstalk.current_jobs': {
        info: '所有管道中作业的当前数量，按状态分组：紧急，就绪，保留，延迟和已埋。'
    },

    'beanstalk.current_connections': {
        info: '按连接类型分组的当前连接数：写入，生产者，工作者，等待。'
    },

    'beanstalk.binlog': {
        info: '写入到binlog和作为压缩的一部分迁移的记录速率。'
    },

    'beanstalk.uptime': {
        info: 'beanstalkd服务器已运行的总时间。'
    },

    'beanstalk.jobs': {
        info: '当前管道中作业的数量，按状态分组：紧急，就绪，保留，延迟和已埋。'
    },

    'beanstalk.connections': {
        info: '连接到此管道的当前连接数，按连接类型分组：使用中，等待中和正在观察。'
    },

    'beanstalk.commands': {
        info: 'beanstalkd执行的delete和pause命令速率。'
    },

    'beanstalk.pause': {
        info: '显示管道暂停的持续时间以及暂停剩余的时间。'
    },

    // ------------------------------------------------------------------------
    // web_log
    'web_log.response_statuses': {
        info: 'Web服务器响应类型。 <code>success</code> 包括 <b>1xx</b>、<b>2xx</b> 和 <b>304</b>，<code>error</code> 包括 <b>5xx</b>，<code>redirect</code> 包括 <b>3xx</b> 除了 <b>304</b>，<code>bad</code> 包括 <b>4xx</b>，<code>other</code> 包括所有其他响应。',
        mainheads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="success"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="成功的请求数"'
                    + ' data-units="每秒请求数"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[0] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="redirect"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="重定向请求数"'
                    + ' data-units="每秒请求数"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[2] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="bad"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="错误的请求数"'
                    + ' data-units="每秒请求数"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[3] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            },

            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="error"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="服务器错误数"'
                    + ' data-units="每秒请求数"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-common-max="' + id + '"'
                    + ' data-colors="' + NETDATA.colors[1] + '"'
                    + ' data-decimal-digits="0"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.response_codes': {
        info: 'Web服务器响应代码类别。 根据标准，<code>1xx</code> 是信息性响应，<code>2xx</code> 是成功响应，<code>3xx</code> 是重定向（尽管它们包括 <b>304</b>，该代码用作“<b>未修改</b>”），<code>4xx</code> 是错误的请求，<code>5xx</code> 是服务器内部错误，<code>other</code> 是非标准响应，<code>unmatched</code> 统计日志文件中未被插件匹配的行数（<a href="https://github.com/firehol/netdata/issues/new?title=web_log%20reports%20unmatched%20lines&body=web_log%20plugin%20reports%20unmatched%20lines.%0A%0AThis%20is%20my%20log:%0A%0A%60%60%60txt%0A%0Aplease%20paste%20your%20web%20server%20log%20here%0A%0A%60%60%60" target="_blank">如果您有任何未匹配的行，请告诉我们</a>）。',
    },

    'web_log.response_time': {
        mainheads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="avg"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="平均响应时间"'
                    + ' data-units="毫秒"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.detailed_response_codes': {
        info: '每个响应代码的响应次数。'
    },

    'web_log.requests_per_ipproto': {
        info: '每个IP协议版本接收的Web服务器请求。'
    },

    'web_log.clients': {
        info: '访问Web服务器的唯一客户端IP，在每个数据收集迭代中。如果数据收集是<b>每秒</b>，则此图表显示<b>每秒的唯一客户端IP</b>。'
    },

    'web_log.clients_all': {
        info: '自netdata上次重启以来访问Web服务器的唯一客户端IP。此插件在内存中保留所有访问Web服务器的唯一IP。在非常繁忙的Web服务器上（数百万个唯一IP），您可能希望禁用此图表（检查<a href="https://github.com/firehol/netdata/blob/master/conf.d/python.d/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>）。'
    },

    // ------------------------------------------------------------------------
    // web_log for squid

    'web_log.squid_response_statuses': {
        info: 'Squid响应类型。' +
        '<code>成功</code>包括<b>1xx</b>、<b>2xx</b>、<b>000</b>、<b>304</b>，' +
        '<code>错误</code>包括<b>5xx</b>和<b>6xx</b>，' +
        '<code>重定向</code>包括<b>3xx</b>，但不包括<b>304</b>，' +
        '<code>错误的</code>包括<b>4xx</b>，' +
        '<code>其他</code>是所有其他响应。'
    },

    'web_log.squid_response_codes': {
        info: '代码族的Web服务器响应。' +
        '根据HTTP标准，<code>1xx</code>是信息性响应，' +
        '<code>2xx</code>是成功响应，' +
        '<code>3xx</code>是重定向（尽管它们包括<b>304</b>，用作"<b>未修改</b>"），' +
        '<code>4xx</code>是错误的请求，' +
        '<code>5xx</code>是内部服务器错误。' +
        'Squid还定义了<code>000</code>主要用于UDP请求，以及<code>6xx</code>用于发送错误标头的破损上游服务器。' +
        '最后，<code>其他</code>是非标准响应，' +
        '<code>不匹配</code>计算日志文件中未被插件匹配的行数（<a href="https://github.com/firehol/netdata/issues/new?title=web_log%20reports%20unmatched%20lines&body=web_log%20plugin%20reports%20unmatched%20lines.%0A%0AThis%20is%20my%20log:%0A%0A%60%60%60txt%0A%0Aplease%20paste%20your%20web%20server%20log%20here%0A%0A%60%60%60" target="_blank">让我们知道</a>如果您有任何不匹配的情况)。'
    },

    'web_log.squid_duration': {
        mainheads: [
            function(os, id) {
                void(os);
                return  '<div data-netdata="' + id + '"'
                    + ' data-dimensions="avg"'
                    + ' data-chart-library="gauge"'
                    + ' data-title="平均响应时间"'
                    + ' data-units="毫秒"'
                    + ' data-gauge-adjust="width"'
                    + ' data-width="12%"'
                    + ' data-before="0"'
                    + ' data-after="-CHART_DURATION"'
                    + ' data-points="CHART_DURATION"'
                    + ' data-colors="' + NETDATA.colors[4] + '"'
                    + ' data-decimal-digits="2"'
                    + ' role="application"></div>';
            }
        ]
    },

    'web_log.squid_detailed_response_codes': {
        info: '每个响应代码的响应次数。'
    },

    'web_log.squid_clients': {
        info: '访问Squid的唯一客户端IP，在每个数据收集迭代中。如果数据收集是<b>每秒</b>，则此图表显示<b>每秒的唯一客户端IP</b>。'
    },

    'web_log.squid_clients_all': {
        info: '自netdata上次重启以来访问Squid的唯一客户端IP。此插件在内存中保留了所有访问服务器的唯一IP。在非常繁忙的Squid服务器上（数百万个唯一IP），您可能希望禁用此图表（检查<a href="https://github.com/firehol/netdata/blob/master/conf.d/python.d/web_log.conf" target="_blank"><code>/etc/netdata/python.d/web_log.conf</code></a>）。'
    },

    'web_log.squid_transport_methods': {
        info: '按交付方式细分：<code>TCP</code>是HTTP端口（通常为3128）上的请求，<code>UDP</code>是ICP端口（通常为3130）或HTCP端口（通常为4128）上的请求。如果使用log_icp_queries选项禁用了ICP日志记录，则不会记录任何ICP回复。<code>NONE</code>用于说明Squid提供了异常响应或根本没有响应。在cachemgr请求和错误中看到，通常是在交易在被分类为上述结果之前失败时出现。也可在对<code>CONNECT</code>请求的响应中看到。'
    },

    'web_log.squid_code': {
        info: '这些是组合的Squid结果状态代码。下面的图表提供了每个组件的细分。请查看有关它们的<a href="http://wiki.squid-cache.org/SquidFaq/SquidLogs">Squid文档</a>。'
    },

    'web_log.squid_handling_opts': {
        info: '这些标签是可选的，描述了执行特定处理的原因或请求的来源。<code>CLIENT</code>表示客户端请求对响应产生影响。通常与客户端发出的<b>no-cache</b>或类似的请求一起看到。因此，缓存必须验证对象。<code>IMS</code>表示客户端发送了重新验证（条件）请求。<code>ASYNC</code>用于Squid内部生成的请求。通常用于缓存信息交换的后台获取，来自stale-while-revalidate缓存控制的后台重新验证，或正在加载的ESI子对象。<code>SWAPFAIL</code>在认为对象在缓存中但无法访问时分配。从服务器请求了一个新副本。<code>REFRESH</code>表示向服务器发送了重新验证（条件）请求。<code>SHARED</code>表示此请求通过折叠转发与现有事务组合。注意：现有请求不标记为SHARED。<code>REPLY</code>表示特定处理是从服务器或对等方的HTTP回复中请求的。通常在由于http_reply_access ACL阻止将服务器响应对象传递给客户端而导致的DENIED中看到。'
    },

    'web_log.squid_object_types': {
        info: '这些标签是可选的，描述了生成的对象类型。<code>NEGATIVE</code>仅在HIT响应中看到，表示响应是缓存的错误响应。例如<b>404 not found</b>。<code>STALE</code>表示对象已缓存并提供了过期的服务。这通常是由于stale-while-revalidate或stale-if-error缓存控制引起的。<code>OFFLINE</code>表示在offline_mode期间从缓存中检索到请求的对象。离线模式永远不会验证任何对象。<code>INVALID</code>表示收到了无效请求。提供了一个指示问题的错误响应。<code>FAIL</code>仅在<code>REFRESH</code>中看到，表示重新验证请求失败。响应对象可能是服务器提供的网络错误或正在重新验证的过期对象，具体取决于stale-if-error缓存控制。<code>MODIFIED</code>仅在<code>REFRESH</code>响应中看到，表示重新验证产生了一个新的修改对象。<code>UNMODIFIED</code>仅在<code>REFRESH</code>响应中看到，表示重新验证产生了一个<b>304</b>（未修改）状态，该状态被中继给客户端。<code>REDIRECT</code>表示Squid生成了一个HTTP重定向响应。'
    },

    'web_log.squid_cache_events': {
        info: '这些标签是可选的，描述了响应是从缓存、网络或其他方式加载的。<code>HIT</code>表示交付的响应对象是本地缓存对象。<code>MEM</code>表示响应对象来自内存缓存，避免了磁盘访问。仅在HIT响应中看到。<code>MISS</code>表示交付的响应对象是网络响应对象。<code>DENIED</code>表示请求被访问控制拒绝。<code>NOFETCH</code>是ICP特定类型，表示服务是活动的，但不适用于此请求（在“-Y”启动期间发送，或在频繁失败期间，仅以命中模式运行的缓存将返回UDP_HIT或UDP_MISS_NOFETCH。因此，邻居只会获取命中）。<code>TUNNEL</code>表示为此事务建立了二进制隧道。'
    },

    'web_log.squid_transport_errors': {
        info: '这些标签是可选的，描述了在响应交付期间发生的一些错误条件（如果有的话）。<code>ABORTED</code>表示由于连接被中止（通常是由客户端）而未完成响应。<code>TIMEOUT</code>表示由于连接超时而未完成响应。'
    },

    // ------------------------------------------------------------------------
    // Fronius Solar Power
    'fronius.power': {
        info: '正数的<code>Grid</code>值表示电力来自电网。负数表示多余的电力正在返回电网，可能是在出售。' +
            '<code>Photovoltaics</code>是来自太阳能电池板的电力。' +
            '<code>Accumulator</code>是蓄电池中存储的电力，如果存在的话。'
    },

    'fronius.autonomy': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, 100]",
        info: '<code>Autonomy</code>是安装的自主性百分比。100％的自主性意味着安装产生的能量超过所需能量。' +
        '<code>Self consumption</code>表示当前发电量与当前负载之间的比率。当达到100％时，<code>Autonomy</code>会下降，因为太阳能电池板无法产生足够的能量，需要电网支持。'
    },

    'fronius.energy.today': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, null]"
    },

    // ------------------------------------------------------------------------
    // Stiebel Eltron Heat pump installation

    'stiebeleltron.system.roomtemp': {
        commonMin: true,
        commonMax: true,
        valueRange: "[0, null]"
    },

    // ------------------------------------------------------------------------
    'chrony.system': {
        info: '在正常操作中，chronyd永远不会调整系统时钟，因为时间尺度的任何跳跃都可能对某些应用程序产生不利影响。相反，系统时钟的任何错误都将通过轻微加快或减慢系统时钟来纠正，直到错误被消除，然后返回到系统时钟的正常速度。由此产生的一个结果是，在系统时钟（由使用<code>gettimeofday()</code>系统调用的其他程序或shell中的<code>date</code>命令读取）与chronyd对当前真实时间的估计（在服务器模式下向NTP客户端报告）不同时会有一个时间段。此行报告的值是由于这种效应造成的差异。',
        colors: NETDATA.colors[3]
    },

    'chrony.offsets': {
        info: '<code>last offset</code>是上次时钟更新时的估计本地偏移量。<code>RMS offset</code>是偏移值的长期平均值。',
        height: 0.5
    },

    'chrony.stratum': {
        info: '<code>stratum</code>指示我们距离连接有附加参考时钟的计算机有多少跳。这样的计算机是stratum-1计算机。',
        decimalDigits: 0,
        height: 0.5
    },

    'chrony.root': {
        info: '此系统与根时间服务器的估计延迟。 <code>delay</code>是到最终与stratum-1计算机同步的计算机的网络路径延迟总和。<code>dispersion</code>是通过所有计算机返回到最终与stratum-1计算机同步的计算机的总离散度。离散度是由于系统时钟分辨率、统计测量变化等造成的。',
    },

    'chrony.frequency': {
        info: '<code>frequency</code>是如果chronyd不进行校正，系统时钟将出现的错误速率。它以ppm（百万分之一）表示。例如，1ppm的值意味着当系统时钟认为它已经提前了1秒时，相对于真实时间，它实际上提前了1.000001秒。',
        colors: NETDATA.colors[0]
    },

    'chrony.residualfreq': {
        info: '这显示了当前选择的参考源的<code>残余频率</code>。它反映了来自参考源的测量指示的频率与当前使用的频率之间的任何差异。' +
        '原因是这不总是零是因为对频率应用了平滑过程。每当从参考源获得测量并计算新的残余频率时，将新频率的估计精度与现有频率值的估计精度（参见<code>skew</code>）进行比较。计算新频率的加权平均值，权重取决于这些精度。如果来自参考源的测量遵循一致的趋势，残余频率将随时间被驱动为零。',
        height: 0.5,
        colors: NETDATA.colors[3]
    },

    'chrony.skew': {
        info: '频率的估计误差边界。',
        height: 0.5,
        colors: NETDATA.colors[5]
    },

    'couchdb.active_tasks': {
        info: '在此CouchDB <b>集群</b>上运行的活动任务。当前存在四种类型的任务：索引器（视图构建）、复制、数据库压缩和视图压缩。'
    },

    'couchdb.replicator_jobs': {
        info: '正在此节点上进行的任何复制作业的详细分解。有关更多信息，请参阅<a href="http://docs.couchdb.org/en/latest/replication/replicator.html">复制器文档</a>。'
    },

    'couchdb.open_files': {
        info: 'CouchDB持有的所有文件的计数。如果此值似乎固定在1024或4096，则您的服务器进程可能已达到打开文件句柄限制，<a href="http://docs.couchdb.org/en/latest/maintenance/performance.html#pam-and-ulimit">需要增加。</a>'
    }
};
