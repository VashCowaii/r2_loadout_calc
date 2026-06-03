const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_Ability21_Part01",
  "childAbilityList": [
    "MortenaxBlade_MortenaxBlade_Ability21_Part01",
    "MortenaxBlade_MortenaxBlade_Ability21_Part02"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    5,
    10,
    0
  ],
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "All Karma Comes Due"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "MortenaxBlade_Ability21_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}