const configAbility = {
  "fileName": "Gilgamesh_Gilgamesh_Ability03_Part01",
  "childAbilityList": [
    "Gilgamesh_Gilgamesh_Ability03_Camera",
    "Gilgamesh_Gilgamesh_Ability03_EnterReady",
    "Gilgamesh_Gilgamesh_Ability03_Part01",
    "Gilgamesh_Gilgamesh_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": 5,
  "toughnessList": [
    2,
    40,
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
      "ability": "Gilgamesh_Ability03_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Skill Point User}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}