const configAbility = {
  "fileName": "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part01",
  "childAbilityList": [
    "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part01",
    "60005_Monster_BattleEvent_W1_Colossus_Ability08_Part02",
    "60005_Monster_BattleEvent_W1_Colossus_Ability08_Camera"
  ],
  "skillTrigger": "Skill08",
  "abilityType": "Basic ATK",
  "energy": 10,
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
      "ability": "Monster_BattleEvent_W1_Colossus_Ability08_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}