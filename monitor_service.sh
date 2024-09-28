# 服务名称
service_name="docs:dev"

# 检查服务是否运行
check_service() {
    # 使用pgrep检查服务是否正在运行
    if ! pgrep -f "$service_name" > /dev/null; then
        echo "Service not running. Restarting..."
        start_service
    fi
}

# 启动服务
start_service() {
    nohup npm run $service_name &
    echo "Service started."
}

# 主循环
while true; do
    check_service
    sleep 10  # 每隔10秒检查一次
done
