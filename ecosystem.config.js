// ecosystem.config.js
module.exports = {
  apps: [{
    name: "udg-app",
    script: "./index.js",
    
    // Auto restart configuration
    max_restarts: 10,           // Jumlah maksimal restart dalam timeframe
    min_uptime: "10s",         // Waktu minimal aplikasi harus berjalan sebelum dianggap successfully launched
    restart_delay: 4000,       // Delay antara restart (dalam milisecond)
    
    // Monitoring untuk crash
    watch: true,               // Monitor perubahan file
    ignore_watch: [            // File/folder yang diabaikan
      "node_modules",
      "logs"
    ],
    
    // Error handling
    max_memory_restart: "1G",  // Restart jika penggunaan memori melebihi batas
    
    // Logging
    error_file: "logs/err.log",
    out_file: "logs/out.log",
    
    // Environment variables
    env: {
      NODE_ENV: "production",
      REDIS_HOST: "127.0.0.1",
      REDIS_PORT: "6379",
      REDIS_PASSWORD: ""
    },
    
    // Cluster mode
   // instances: "max",          // Jumlah instance yang akan dijalankan
   // exec_mode: "cluster",      // Mode eksekusi (cluster/fork)
    
    // Additional options
    autorestart: true,         // Auto restart ketika proses mati
    exp_backoff_restart_delay: 100  // Delay eksponensial antara restart
  }]
}
