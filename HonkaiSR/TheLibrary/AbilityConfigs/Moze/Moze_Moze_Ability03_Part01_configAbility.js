const configAbility = {
  "fileName": "Moze_Moze_Ability03_Part01",
  "childAbilityList": [
    "Moze_Moze_Ability03_Camera",
    "Moze_Moze_Ability03_EnterReady",
    "Moze_Moze_Ability03_Part01",
    "Moze_Moze_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    30,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "OnInsertAbort_Flg"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of",
        "target1": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Voracity: 1}} + {{Voracity: 2}}"
        }
      }
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Moze_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}