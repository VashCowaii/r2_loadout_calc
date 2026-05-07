const configAbility = {
  "fileName": "61006_HeliobusActionAbilitySetBoom_Ability03_Part01",
  "childAbilityList": [
    "61006_HeliobusActionAbilitySetBoom_Ability03_EnterReady",
    "61006_HeliobusActionAbilitySetBoom_Ability03_Part01",
    "61006_HeliobusActionAbilitySetBoom_Ability03_Part02",
    "61006_ActionEventAbility_Camera_AllDarkTeam",
    "61006_HeliobusActionAbilitySetBoom_Boom",
    "61006_HeliobusActionAbilitySetBoom_Camera"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "HeliobusActionAbilitySetBoom_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  },
  "realTargetData": {
    "primaryTarget": "All Enemy Team"
  }
}