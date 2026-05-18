import React from 'react'

function Details () {
    return(
<main>
        <section>
            <h2>The Legend of the Roland TR-808</h2>
            <p>
                When the Roland TR-808 was released in 1980, it was actually considered a commercial failure. Critics
                complained that its drum sounds were "unrealistic" and "synthetic." Unlike its expensive competitor, the
                LinnDrum (which used real recordings of drums), the 808 generated its sounds using analog
                synthesis.<br/><br/>
                However, what the 808 lacked in realism, it made up for in character. Its deep, booming bass drum and
                "tinny" handclaps became the foundation for entire genres, from 80s Synthpop to modern Hip-Hop and Trap.

            </p>
        </section>
        <section>
            <h2>Technical Anatomy: How it Works</h2>
            <p>The 808 was unique because it allowed musicians to program a full song's worth of drum patterns using a
                16-step sequencer. Instead of just tapping a pad, producers could "write" the rhythm into the machine's
                memory, light by light.</p>
        </section>
        <section>
            <h2>The Sound Palette (Data Table)</h2>
            <p>To understand why this machine is so famous, we have to look at the specific sounds it offered.</p>
            <table>
                <thead>
                    <tr>
                        <th>Sound Component</th>
                        <th>Description</th>
                        <th>Iconic Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bass Drum</td>
                        <td>A deep, tunable sub-bass thump.</td>
                        <td>The "heartbeat" of 80s dance music.</td>
                    </tr>
                    <tr>
                        <td>Snare Drum</td>
                        <td>Sharp and snappy with adjustable "snappy" noise.</td>
                        <td>Creating high-energy backbeats.</td>
                    </tr>
                    <tr>
                        <td>Handclap</td>
                        <td>A layered, processed "crunchy" clap sound.</td>
                        <td>Used in almost every 80s pop hit.</td>
                    </tr>
                    <tr>
                        <td>Hi-Hats</td>
                        <td>Two types: open and closed, with a metallic timbre.</td>
                        <td>Driving the rhythm in dance tracks.</td>
                    </tr>
                    <tr>
                        <td>Cowbell</td>
                        <td>A metallic, almost melodic "donk" sound.</td>
                        <td>Whitney Houston's "I Wanna Dance with Somebody."</td>
                    </tr>
                    <tr>
                        <td>Tom-Toms</td>
                        <td>Deep, resonant tones with adjustable decay.</td>
                        <td>Adding dynamic fills and transitions.</td>
                    </tr>
                    <tr>
                        <td>Cymbal</td>
                        <td>A shimmering, long-decay metallic wash.</td>
                        <td>Adding atmosphere to slow-burn synth tracks.</td>
                    </tr>
                </tbody>
            </table>


        </section>
        <section>
            <h2>The Legacy</h2>
            <p>Roland only produced about 12,000 units before discontinuing the machine in 1983. Because they were sold
                for cheap on the second-hand market, they fell into the hands of young, experimental producers. Today,
                an original TR-808 in good condition can sell for over $5,000—a testament to its status as the most
                influential instrument in electronic music history.</p>
        </section>
        <section>
            <h2>Visualizing the TR-808</h2>
            <p>
                The 808's design was as iconic as its sound. With its bright orange and gray color scheme, rows of
                colorful buttons, and a distinctive layout of knobs and sliders, it was instantly recognizable. The
                machine's interface was designed to be intuitive, allowing musicians to quickly program complex rhythms
                without needing a degree in engineering.
            </p>
            <figure>
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
                    alt="The Roland TR-808 drum machine with its iconic orange and gray interface"/>

                <figcaption>The iconic interface of the Roland TR-808, with its colorful buttons and knobs.</figcaption>
            </figure>
</section>
    </main>
    );
};
export default Details
