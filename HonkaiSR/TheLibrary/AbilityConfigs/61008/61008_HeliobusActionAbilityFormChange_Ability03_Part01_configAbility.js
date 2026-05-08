const configAbility = {
  "fileName": "61008_HeliobusActionAbilityFormChange_Ability03_Part01",
  "childAbilityList": [
    "61008_HeliobusActionAbilityFormChange_Ability03_EnterReady",
    "61008_HeliobusActionAbilityFormChange_Ability03_Part01",
    "61008_HeliobusActionAbilityFormChange_Ability03_Part02",
    "61008_ActionEventAbility_Camera_AllDarkTeam",
    "61008_HeliobusActionAbilityFormChange_Revert"
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
      "ability": "HeliobusActionAbilityFormChange_Ability03_Part02",
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