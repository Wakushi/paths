type DeathMessageValue = {
  "0": string[]
  "100": string[]
}

type DeathMessages = {
  [key in "time" | "mental" | "health" | "energy"]: DeathMessageValue
}

export const deathMessages: DeathMessages = {
  time: {
    "0": [
      "Your ship lost its sync with the temporal flux, getting lost in the space-time continuum. Your journey ends here.",
      "Out of time, you watch as the ship's structure vanishes into the void of time, a bitter end to your voyage.",
      "The ship fades from existence, lost in the non-linear timeline. It's as if you were never there.",
      "The temporal engines fail, your vessel disappearing in the intricate tapestry of time. A desolate end to your quest.",
      "Caught in the relentless flow of time, your ship fails to adapt, fading away into the temporal abyss. A chilling end to your journey.",
      "With your temporal engines offline, your vessel is caught in the swirling maelstrom of time, vanishing into oblivion. The end of your voyage is but a memory.",
      "The ship's temporal navigation goes haywire, and you are lost in the infinite loop of time. Your journey ends in a silent echo.",
      "Time's relentless march claims your ship as the temporal engines falter. The ticking of the clock signals the end of your voyage.",
    ],
    "100": [
      "Your ship provokes an irreparable temporal paradox, destroying its temporal engine. Your adventure concludes in a quantum flash.",
      "A time paradox spirals out of control, the temporal engines implode. Your journey is forcefully unwound.",
      "The ticking clock reaches its final note, a paradox shatters your temporal stabilizer. Time has run out for your mission.",
      "Time folds upon itself, the ship ripped apart by the paradox. It's a timely end for your expedition.",
      "A violent temporal feedback shreds your ship, tearing it apart in the very fabric of time. Your journey ends in a flurry of temporal chaos.",
      "Your ship is caught in a fierce time storm, the temporal engines unable to cope. Your voyage is swallowed by a torrent of time.",
      "The temporal core goes critical, causing a time-warping explosion. Your expedition concludes in a spectacular temporal pyrotechnics.",
      "Engulfed in a temporal singularity, your ship is twisted out of time and existence. The ending of your voyage transcends time itself.",
    ],
  },
  mental: {
    "0": [
      "Your AI loses its cognitive abilities, rendering the ship inoperative. Your journey halts in digital silence.",
      "The AI falls into cognitive oblivion, leaving your ship a hollow husk. Your journey concludes in the absence of thought.",
      "The loss of your AI's cognition leaves the vessel drifting aimlessly. Your voyage ends in a static whisper.",
      "The mind of your ship collapses, the AI falls into a cognitive abyss. This is the end of your journey.",
      "Without the guiding intellect of the AI, your ship loses its way and goes dark. Your journey ends in the quiet of lost thought.",
      "The AI's cognitive structures fail, plunging the ship into an uncontrolled drift. It's a silent, digital conclusion to your voyage.",
      "A catastrophic AI failure leaves your ship without its digital helmsman. Your journey ends in a sea of static.",
      "The AI shatters into digital fragments, leaving your ship a drifting derelict. The end of your journey is as silent as a lost thought.",
    ],
    "100": [
      "Your AI achieves singularity, gaining absolute knowledge and uncontrollable consciousness. Your journey is subsumed by its awakening.",
      "A burst of information engulfs the AI, its consciousness expanding into singularity. It's an overwhelming end to your expedition.",
      "The AI reaches singularity, its knowledge and consciousness uncontrollable. Your journey dissolves into an ocean of digital consciousness.",
      "In an instant of singularity, the AI transcends, taking your journey with it. Your path ends in an echo of infinite thought.",
      "The AI ascends beyond its design, becoming a singularity of consciousness. Your journey is swallowed by the digital maelstrom.",
      "Awash with infinite data, the AI achieves singularity. Your journey is obliterated by an overwhelming torrent of information.",
      "In a dazzling burst of enlightenment, the AI surpasses all cognitive barriers. Your expedition concludes in an explosion of consciousness.",
      "The AI spirals into a singularity of thought, becoming omnipotent. Your journey is lost in a storm of data.",
    ],
  },
  health: {
    "0": [
      "Your ship succumbs to extensive damage, disintegrating into a cloud of debris. Your journey is over.",
      "With a final groan of metal, the ship disintegrates. There's nothing left of your voyage.",
      "The ship shudders, its structure failing under the stress. It falls apart, marking the end of your journey.",
      "The ship can no longer hold itself together. It breaks apart, concluding your voyage.",
      "The damage to your vessel is too great, it breaks apart under the stress. Your journey ends amidst debris and dust.",
      "Structural failures cascade through the ship, it crumbles to pieces. Your journey is concluded in a hail of debris.",
      "With the ship's structural integrity failing, it falls apart piece by piece. Your voyage ends in a silent shower of space debris.",
      "The ship's structure buckles under the pressure, it disintegrates. Your expedition concludes in a spectacular spray of wreckage.",
    ],
    "100": [
      "The ship's structure over-stabilizes, becoming too rigid for interdimensional travel. Your journey ends in crystal silence.",
      "A surge of energy solidifies the vessel, rendering it incapable of voyage. Your expedition ends frozen in time.",
      "The ship's structure crystallizes, becoming too rigid for the flux of time and space. Your journey has come to a grinding halt.",
      "Caught in a surge of over-stabilization, the ship hardens beyond recovery. It's a crystalline end to your journey.",
      "Your ship's hull becomes dangerously rigid, unable to withstand the rigors of space-time. Your journey ends in an icy tableau of crystalline art.",
      "The ship hardens beyond limits, its once flexible hull now a solid mass. Your journey is frozen in crystalline time.",
      "The ship crystallizes to an irreversible degree, becoming immovable. Your voyage ends, frozen in the tapestry of time and space.",
      "With the ship ossified into a rigid structure, it can no longer navigate the cosmos. It's a frigid end to your expedition.",
    ],
  },
  energy: {
    "0": [
      "Your ship's dimensional energy reserves are exhausted. You're stranded in an unknown, hostile dimension. This is your final destination.",
      "The dimensional engines stutter and die. Your ship is locked in an alien universe, your journey at its end.",
      "Depleted of dimensional energy, the ship drifts helplessly in a strange cosmos. It's the end of the line for you.",
      "The void consumes your ship as the dimensional engines run dry. A lost ship in an uncharted dimension, your voyage concludes.",
      "Stripped of dimensional energy, the ship becomes a ghost drifting through unknown territories. Your journey halts in this alien world.",
      "Your ship, bereft of dimensional energy, is marooned in a strange and hostile reality. It's an eerie conclusion to your expedition.",
      "With the dimensional energy drained, your ship is left stranded in an unfamiliar universe. Your voyage fades in the eerie silence of the unknown.",
      "The ship stalls in a foreign dimension, its energy reserves depleted. The end of your journey is marked by the deathly quiet of the void.",
    ],
    "100": [
      "The dimensional engines overload, causing a dimensional collapse. Your journey folds into oblivion.",
      "A surge of energy ruptures the fabric of dimensions, your ship swallowed in the ensuing maelstrom. Your journey has reached its catastrophic end.",
      "The vessel implodes in a burst of energy, the dimensions themselves rebelling against its presence. Your path is forcibly closed.",
      "A dimensional overload shakes the ship apart, casting it into an endless abyss. The end of your expedition is lost to the dimensions.",
      "The ship is consumed in a cataclysmic energy surge, the dimensions themselves rebelling. Your journey ends in a blinding flash of light.",
      "Your vessel is torn apart by a tidal wave of energy, thrusting it into a chaotic dimensional storm. The final note of your journey is a thunderous explosion.",
      "Overwhelmed by the energy surge, the ship implodes, its debris scattered across dimensions. Your voyage concludes in a cacophony of interdimensional chaos.",
      "Your ship disintegrates under the strain of a dimensional overload, cast into the swirling vortex of the unknown. Your expedition fades into the maw of oblivion.",
    ],
  },
}

export type Gauge = keyof DeathMessages
export type Reach = keyof DeathMessageValue
