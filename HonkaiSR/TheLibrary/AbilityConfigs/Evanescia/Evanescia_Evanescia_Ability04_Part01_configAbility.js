const configAbility = {
  "fileName": "Evanescia_Evanescia_Ability04_Part01",
  "childAbilityList": [
    "Evanescia_Evanescia_Ability04_Camera",
    "Evanescia_Evanescia_Ability04_Part01",
    "Evanescia_Evanescia_Ability04_Part02"
  ],
  "skillTrigger": "Skill04",
  "tag": "InfiniteRefresh",
  "abilityType": "Elation",
  "energy": 5,
  "toughnessList": [
    0,
    20,
    0
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Evanescia_Ability04_Part02",
      "isTrigger": true
    },
    {
      "name": "Looped Event",
      "maxLoops": 8,
      "Event": []
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}