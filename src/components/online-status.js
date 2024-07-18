const fetch = require('node-fetch');

const userId = 'YOUR_DISCORD_USER_ID';  // Replace with your Discord user ID
const token = 'YOUR_BOT_TOKEN';  // Replace with your Discord bot token

async function fetchPresence() {
    try {
        const response = await fetch(`https://discord.com/api/v9/users/${userId}/presence`, {
            headers: {
                Authorization: `Bot ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch presence');
        }

        const presenceData = await response.json();
        console.log('Presence Data:', presenceData);

        return presenceData.status;  // Return the status (online/offline/idle/etc.)
    } catch (error) {
        console.error('Error fetching presence:', error);
        return 'offline';  // Return 'offline' as default
    }
}

// Example usage
fetchPresence().then(status => {
    console.log('Current Status:', status);
    // Here you can update your portfolio UI to display the status
    // You could use this status to update your website or portfolio dynamically
});
