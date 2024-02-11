import "./App.css";
import React from "react";

import BarChart from "./BarChart";

import Flag from "react-flagkit";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />

      <main>
        <div className="articleHeader">How Many Nukes Are There?</div>

        <div className="articleSubheader">
          And why aren't there less... or more?
        </div>

        <div className="articleAuthor">By AMADEUS KANG</div>

        <br />
        <br />

        <div className="content">
          <div className="text">
            <br />
            The advent of nuclear weapons transformed both warfare and
            diplomacy. The unsalvageable destruction of nations became a
            credible threat, motivating the initiative for robust defense
            strategies.
            <br />
            <br />
            But how many nukes are there? Let's take a look at the numbers.
            <br />
            <br />
            Russia and the United States still possess the largest nuclear
            warhead inventories as a result of the Cold War. China, France, UK,
            Pakistan, India, Israel, and North Korea also possess nuclear
            weapons, but their numbers are relatively few.
            <br />
            <br />
          </div>
        </div>

        <div className="graph">
          <BarChart />
        </div>

        <div className="content">
          <div className="text">
            <br />
            <br />
            The US, UK, and France are allied states with a long history of
            Atlantic cooperation. They are party to the Non-Proliferation Treaty
            (NPT), a treaty purposed to "prevent the spread of nuclear weapons
            and weapons technology, to promote cooperation in the peaceful uses
            of nuclear energy and to further the goal of achieving nuclear
            disarmament and general and complete disarmament." A total of 191
            states have signed the treaty making it the most ratified arms
            limitation agreement in the world.
            <br />
            <br />
            However, four nuclear-weapon states are not party to the NPT:
            <br />
            <br />
          </div>
        </div>

        <div className="content">
          <div className="flagContainerWrapper">
            <ul className="flagContainer">
              <li>
                India <Flag style={{ marginLeft: "2%" , position:"relative", top: "0.3rem"}} country={"IN"} />
              </li>
              <li>
                Israel <Flag style={{ marginLeft: "2%" , position:"relative", top: "0.3rem"}} country={"IL"} />
              </li>
              <li>
                North Korea <Flag style={{ marginLeft: "2%" , position:"relative", top: "0.3rem"}} country={"KP"} />
              </li>
              <li>
                Pakistan <Flag style={{ marginLeft: "2%" , position:"relative", top: "0.3rem"}} country={"PK"} />
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="text">
            <br />
            Israel is believed to possess nuclear weapons but does not formally
            acknowledge it, maintaining a policy of strategic ambiguity.
            <br />
            <br />
            The spread of nuclear weapons among states is also prevented by the
            "nuclear umbrella", a policy wherein the United States guarantees to
            retaliate on behalf of ally states during a nuclear attack.
            <br />
            <br />
            Some allied states such as South Korea have touted pursuing a
            nuclear arms program. It may seem unlikely considering that South
            Korea falls under the American nuclear umbrella. However, South
            Korea is considered a "paranuclear" state, already possessing the
            scientific expertise, infrastructure, and supply chains to produce a
            nuclear weapon. Additionally, South Korea shares its border with
            North Korea, motivating a higher level of militarism in South Korea
            than most developed countries. South Korea is ranked 9th for highest
            military expenditure in 2022 according to SIPRI. It is no
            coincidence that 6 of the top 10 states with the highest military
            expenditure possess nuclear weapons.
            <br />
            <br />
            Some say that the presence of nuclear weapons ushered the world into
            peace by establishing a balance of power. However, that balance of
            power remains delicate. So long as states maintain and seek nuclear
            weapons, the risk of global annihilation remains non-zero.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
