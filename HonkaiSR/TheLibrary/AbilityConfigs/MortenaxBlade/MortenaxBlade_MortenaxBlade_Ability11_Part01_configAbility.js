const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_Ability11_Part01",
  "childAbilityList": [
    "MortenaxBlade_MortenaxBlade_Ability11_Camera",
    "MortenaxBlade_MortenaxBlade_Ability11_Part01",
    "MortenaxBlade_MortenaxBlade_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 20,
  "toughnessList": [
    10,
    0,
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
      "ability": "MortenaxBlade_Ability11_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}