const configAbility = {
  "fileName": "60047_MissionBattleEvent60047_Passive",
  "childAbilityList": [
    "60047_MissionBattleEvent60047_Passive",
    "60047_MissionBattleEvent60047_Ability03_Part01",
    "60047_MissionBattleEvent60047_Ability03_Part02",
    "60047_BattleEventAbility_60047_Camera"
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
      "modifier": "<a class=\"gModGreen\" id=\"753308383\">MissionBattleEvent60047_PassiveAbility</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"675034539\">MissionBattleEvent60047_AutoUseUltraAbility</a>"
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