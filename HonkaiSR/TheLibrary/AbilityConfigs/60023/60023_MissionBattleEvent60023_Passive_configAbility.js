const configAbility = {
  "fileName": "60023_MissionBattleEvent60023_Passive",
  "childAbilityList": [
    "60023_MissionBattleEvent60023_Passive",
    "60023_MissionBattleEvent60023_Ability03_Part01",
    "60023_BattleEventAbility_60023_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-889052403\">MissionBattleEvent60023_PassiveAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"216394385\">MissionBattleEvent60023_AutoUseUltraAbility</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}