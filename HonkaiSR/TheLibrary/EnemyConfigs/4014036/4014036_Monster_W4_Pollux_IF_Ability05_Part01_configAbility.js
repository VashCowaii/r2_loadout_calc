const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_IF_Ability05_Part01",
  "childAbilityList": [
    "4014036_Monster_W4_Pollux_IF_Ability05_Part01",
    "4014036_Monster_W4_Pollux_IF_Ability05_Part02",
    "4014036_Monster_W4_Pollux_Ability05_Camera"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_ReadyToCharge"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "ability": "Monster_W4_Pollux_IF_Ability05_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "onAbort": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_ReadyToCharge"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}