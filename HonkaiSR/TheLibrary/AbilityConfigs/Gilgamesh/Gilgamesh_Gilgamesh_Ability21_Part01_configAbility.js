const configAbility = {
  "fileName": "Gilgamesh_Gilgamesh_Ability21_Part01",
  "childAbilityList": [
    "Gilgamesh_Gilgamesh_Ability21_Part01",
    "Gilgamesh_Gilgamesh_Ability21_Part02"
  ],
  "skillTrigger": "Skill21",
  "abilityType": "Skill",
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
      "ability": "Gilgamesh_Ability21_Part02",
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