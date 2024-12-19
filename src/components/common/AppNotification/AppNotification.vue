<template>
    <NotificationGroup v-if="notifications.length !== 0" :style="topCenter">
        <Fade v-for="(notification, index) of notifications" :key="index" :appear="notification.status">
            <Notification :type="{ style: notification.type }">
                <!-- <span class="icon">
                    <component :is="notification.type" />
                </span> -->
                <span class="message">{{ notification.message }}</span>
            </Notification>
        </Fade>
    </NotificationGroup>
</template>

<script>
import { Fade } from '@progress/kendo-vue-animation'
import { Notification, NotificationGroup } from '@progress/kendo-vue-notification'
export default {
    name: 'AppNotification',
    components: {
        Fade,
        Notification,
        NotificationGroup,
    },
    data() {
        return {
            topCenter: { top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '386px', zIndex: 999999 }
        }
    },
    computed: {
        notifications() {
            return this.$store.state.utility.notifications
        }
    },
    methods: {

    }
}
</script>