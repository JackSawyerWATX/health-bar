import { useState } from 'react';

function HealthBar() {
    // Step 1: Initialize the health state (assuming max health is 100)
    const [health, setHealth] = useState(100); // 100 is the max health

    // Step 2: Calculate the width of the health bar based on the current health
    const healthBarWidth = `${health}%`;

    return (
        <div style={{ width: '100%', height: '30px', backgroundColor: '#ccc', borderRadius: '5px' }}>
            <div
                style={{
                    width: healthBarWidth,
                    height: '100%',
                    backgroundColor: 'green',
                    borderRadius: '5px 0 0 5px' // Rounded left corners
                }}
            />
        </div>
    );
}

export default HealthBar;
